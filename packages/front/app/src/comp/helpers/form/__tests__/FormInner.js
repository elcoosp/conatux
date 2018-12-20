import { desc, getFakeProps } from '@:/utils/testing'
import FormInner from '../FormInner'
const [props] = getFakeProps(__dirname, '../FormInner')('FormInner')

desc.compWithSnap({ FormInner }, props, () => {})
