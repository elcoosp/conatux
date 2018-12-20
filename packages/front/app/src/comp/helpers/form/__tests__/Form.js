import { desc, getFakeProps } from '@:/utils/testing'
import Form from '../Form'

jest.mock('../FormInner.js', () => 'FormInner')

const [props] = getFakeProps(__dirname, '../Form')('Form')

desc.compWithSnap({ Form }, props, () => {})
