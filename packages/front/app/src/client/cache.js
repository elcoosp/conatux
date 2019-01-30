import { InMemoryCache } from 'apollo-cache-inmemory'
import { CachePersistor } from 'apollo-cache-persist'

const cache = new InMemoryCache({
  addTypename: false
})

export const persistor = new CachePersistor({
  cache,
  storage: window.localStorage
})

export default cache
