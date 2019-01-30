import auth from './auth'

const defaults = {
  auth
}

const clientState = {
  defaults,
  resolvers: {} // Needed when queries are refetched after a client.resetStore() to not throw
}
export default clientState
