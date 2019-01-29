import Auth from '../auth'
import { desc } from '@:/utils/testing'
import { STORAGE } from '@:/constants'
import client from '@:/client'

desc.module('Auth', () => {
  desc.func('storeToken', () => {
    it('should set the given token to the localStorage', () => {
      const token = 'token'
      Auth.storeToken(token)
      expect(localStorage.setItem).toHaveBeenCalledWith(
        STORAGE.KEYS.TOKEN,
        token
      )
    })
  })

  desc.func('getStoredToken', () => {
    it('should retrieve the stored token', () => {
      Auth.getStoredToken()
      expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE.KEYS.TOKEN)
    })
  })

  desc.func('clearStoredToken', () => {
    it('should remove the token key from localStorage', () => {
      Auth.clearStoredToken()
      expect(localStorage.removeItem).toHaveBeenLastCalledWith(
        STORAGE.KEYS.TOKEN
      )
    })
  })

  desc.func('clearApolloCache', () => {
    it('should clear the localStorage key associated with the apollo cache', () => {
      Auth.clearApolloCache()
      expect(localStorage.removeItem).toHaveBeenLastCalledWith(
        STORAGE.KEYS.APOLLO_CACHE
      )
    })
  })

  desc.func('signOut', async () => {
    beforeEach(() => {
      Auth.clearStoredToken = jest.fn()
      Auth.clearApolloCache = jest.fn()
      client.resetStore = jest.fn(() => Promise.resolve())
    })

    it('should call `Auth.clearStoredToken()`', async () => {
      await Auth.signOut()
      expect(Auth.clearStoredToken).toHaveBeenCalledTimes(1)
    })
    it('should call `Auth.resetStore()`', async () => {
      await Auth.signOut()
      expect(client.resetStore).toHaveBeenCalledTimes(1)
    })
  })
})
