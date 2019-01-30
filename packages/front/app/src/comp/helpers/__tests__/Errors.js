import { desc } from '@:/utils/testing'
import Errors from '../Errors'

const errors = ['Bad request', 'Something goes wrong']
const props = {
  errors
}
desc.compWithSnap({ Errors }, props, () => {})
