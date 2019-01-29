import { Login } from '../../auth/Login'
import { desc } from '@:/utils/testing'

desc.compWithSnap({ Login }, { authToken: 'validToken' }, () => {})
desc.compWithSnap({ Login }, { authToken: null }, () => {})
