import ApolloClient from 'apollo-boost'
import { URI } from '@:/constants'
import request from './request'
import clientState from './clientState'
import cache from './cache'

const client = new ApolloClient({
  uri: URI.GRAPHQL,
  request,
  clientState,
  cache
})

export default client
