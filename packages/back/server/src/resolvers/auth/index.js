const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { WrongCredentials } = require('../../errors')

const signToken = userId => jwt.sign({ userId }, process.env.JWT_SECRET)

const auth = {
  signUp: async (_, { username, email, password: rawPassword }, { prisma }) => {
    const password = await bcrypt.hash(rawPassword, 10)
    const user = await prisma.createUser({ username, email, password })

    return {
      token: signToken(user.id),
      user
    }
  },

  login: async (_, { email, password }, { prisma }) => {
    const user = await prisma.user({ email })
    if (!user) {
      throw new WrongCredentials()
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new WrongCredentials()
    }

    return {
      token: signToken(user.id),
      user
    }
  }
}

module.exports = auth
