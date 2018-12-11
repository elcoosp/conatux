import { labelize } from '@:/utils/linkify'

export default {
  Home: labelize('/', 'Home'),
  Me: {
    Profile: labelize('/me/profile', 'Profile')
  },
  Auth: {
    SignUp: labelize('/auth/signup', 'Sign up')
  }
}
