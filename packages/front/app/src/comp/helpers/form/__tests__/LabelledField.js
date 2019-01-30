import { desc, getFakeProps } from '@:/utils/testing'
import LabelledField from '../LabelledField'

const [props] = getFakeProps(__dirname, '../LabelledField')('LabelledField')

desc.compWithSnap({ LabelledField }, props, () => {})
