import { desc, getFakeProps } from '@:/utils/testing'
import Form from '../Form'

const [props] = getFakeProps(__dirname, '../Form')('Form')

desc.compWithSnap({ Form }, props, () => {})
