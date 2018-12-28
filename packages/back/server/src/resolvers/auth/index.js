const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = {
  signUp: async (_, { username, email, password: rawPassword }, { prisma }) => {
    const password = await bcrypt.hash(rawPassword, 10)
    const user = await prisma.createUser({ username, email, password })

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user
    }
  }

  // async login(parent, { email, password }, ctx, info) {
  //   const user = await ctx.db.query.user({ where: { email } })
  //   if (!user) {
  //     throw new Error(`No such user found for email: ${email}`)
  //   }

  //   const valid = await bcrypt.compare(password, user.password)
  //   if (!valid) {
  //     throw new Error('Invalid password')
  //   }

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
  //     user
  //   }
  // }
}

module.exports = auth
