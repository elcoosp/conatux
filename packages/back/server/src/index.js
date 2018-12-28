require('dotenv').config()
const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')

const main = () => {
  const server = new GraphQLServer({
    endpoint: 'http://prisma:4466',
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma
    }
  })
  server.start(() => console.log('Server is running on http://localhost:4000'))
}

main()
