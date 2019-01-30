import { pipe } from '@:/utils/helpers'
import Auth from '@:/services/auth'

export const setTokenHeaders = operation => {
  const token = Auth.getStoredToken()
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })
}

export default pipe.execAsync(setTokenHeaders)
