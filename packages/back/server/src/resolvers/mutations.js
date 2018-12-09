module.exports = {
  createUser: (root, { name, email, password }, { prisma }) =>
    prisma.createUser({ name, email, password })
}
