import { STORAGE } from '@:/constants'
import client from '@:/client'
import { persistor } from '@:/client/cache'
const clearApolloCache = () =>
  localStorage.removeItem(STORAGE.KEYS.APOLLO_CACHE)
const getStoredToken = () => localStorage.getItem(STORAGE.KEYS.TOKEN)
const storeToken = token => localStorage.setItem(STORAGE.KEYS.TOKEN, token)
const clearStoredToken = () => localStorage.removeItem(STORAGE.KEYS.TOKEN)

const signOut = async () => {
  auth.clearStoredToken()
  await persistor.pause()
  await persistor.purge()
  await client.resetStore()
  // await persistor.resume() // Add this on login
}
const auth = {
  getStoredToken,
  storeToken,
  clearStoredToken,
  clearApolloCache,
  signOut
}

export default auth
