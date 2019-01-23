import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache({
  addTypename: false
})

persistCache({
  cache,
  storage: window.localStorage
})

export default cache
