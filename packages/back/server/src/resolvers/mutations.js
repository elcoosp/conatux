module.exports = {
  createUser: (root, { username, email, password }, { prisma }) =>
    prisma.createUser({ username, email, password })
}
