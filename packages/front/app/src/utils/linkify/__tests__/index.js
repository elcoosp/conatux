import { Link } from 'react-router-dom'
import { desc, expected } from '@:/utils/testing'
import { fromRoutes, labelize } from '..'

desc.module('linkify', () => {
  const path = '/'
  const label = 'Home'
  const pathTwo = 'nested/the-route'
  const labelTwo = 'The route'

  desc.func('labelize', () =>
    expected.withProps({ path, label }).from(labelize, path, label)
  )

  desc.func('fromRoutes', () => {
    const routes = {
      home: labelize(path, label),
      nested: {
        theRoute: labelize(pathTwo, labelTwo)
      }
    }
    const Links = fromRoutes(routes)

    expected.isCompWithProps({
      component: [Links.Home, 'Links.Home'],
      kind: [Link, 'Link'],
      props: {
        to: path,
        children: label
      }
    })

    expected.isCompWithProps({
      component: [Links.Nested.TheRoute, 'Links.Nested.TheRoute'],
      kind: [Link, 'Link'],
      props: {
        to: pathTwo,
        children: labelTwo
      }
    })
  })
})
