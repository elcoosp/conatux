require('dotenv').config()
const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')

const main = async () => {
  const server = new GraphQLServer({
    endpoint: 'http://prisma:4466',
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma
    }
  })

  await server.start()
  console.log('Server is running on http://localhost:4000')
}

main()
