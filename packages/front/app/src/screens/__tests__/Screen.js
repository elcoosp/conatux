import { desc } from '@:/utils/testing'
import { Screen } from '@:/screens'

desc.compWithSnap({ Screen }, { title: 'Title', children: 'Content' }, () => {})
