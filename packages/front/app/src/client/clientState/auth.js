import { STORAGE } from '@:/constants'

export default {
  token: localStorage.getItem(STORAGE.KEYS.TOKEN)
}
