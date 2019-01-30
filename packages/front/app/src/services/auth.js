import { STORAGE } from '@:/constants'
import client from '@:/client'
import cache, { persistor } from '@:/client/cache'
const clearApolloCache = () =>
  localStorage.removeItem(STORAGE.KEYS.APOLLO_CACHE)
const getStoredToken = () => localStorage.getItem(STORAGE.KEYS.TOKEN)
const storeToken = token => localStorage.setItem(STORAGE.KEYS.TOKEN, token)
const clearStoredToken = () => localStorage.removeItem(STORAGE.KEYS.TOKEN)

const signOut = async () => {
  try {
    auth.clearStoredToken()
    await client.resetStore() // Clear the in memory cache
  } catch (error) {
    /* Shallow this error if it's about request in flight since easiest way to really have a cean this.state.
     See https://github.com/apollographql/apollo-client/issues/2919
     */
    const resetStoreWhileInFlightQueriesPendingMessage =
      'Network error: Store reset while query was in flight(not completed in link chain)'
    if (error.message !== resetStoreWhileInFlightQueriesPendingMessage) {
      throw error
    }
  }
}
const auth = {
  getStoredToken,
  storeToken,
  clearStoredToken,
  clearApolloCache,
  signOut
}

export default auth
