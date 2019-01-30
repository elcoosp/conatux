import { desc, getFakeProps } from '@:/utils/testing'
import Submit from '../Submit'

const [props] = getFakeProps(__dirname, '../Submit')('Submit')

desc.compWithSnap({ Submit }, props, () => {})
