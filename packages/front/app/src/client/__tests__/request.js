import { setTokenHeaders } from '../request'
import { desc } from '@:/utils/testing'
import Auth from '@:/services/auth'

desc.module('client.request', () => {
  desc.func('setTokenHeader', () => {
    const operation = {
      setContext: jest.fn()
    }

    it('should call `Auth.getStoredToken()`', () => {
      Auth.getStoredToken = jest.fn(() => 'valid token')
      setTokenHeaders(operation)
      expect(Auth.getStoredToken).toHaveBeenCalledTimes(1)
    })

    describe('Given a token which is valid', () => {
      it('should call `operation.setContext` to set authorization headers with the token', () => {
        const token = 'valid token'
        Auth.getStoredToken = jest.fn(() => token)
        setTokenHeaders(operation)
        expect(operation.setContext).toHaveBeenCalledWith({
          headers: {
            authorization: `Bearer ${token}`
          }
        })
      })
    })

    describe('Given a token which is nullish', () => {
      it('should call `operation.setContext` to set authorization headers to null', () => {
        Auth.getStoredToken = jest.fn(() => undefined)
        setTokenHeaders(operation)
        expect(operation.setContext).toHaveBeenCalledWith({
          headers: {
            authorization: null
          }
        })
      })
    })
  })
})
