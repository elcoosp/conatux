module.exports = {
  user: (root, { id }, { prisma }) =>
    prisma.user({
      id
    })
}
