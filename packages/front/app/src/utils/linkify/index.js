import React from 'react'
import { Link } from 'react-router-dom'

export const labelize = (path, label) => ({
  path,
  label
})

export const fromRoutes = (routesTree, componentName) => {
  if (['label', 'path'].every(prop => routesTree.hasOwnProperty(prop))) {
    const { path, label } = routesTree
    const link = props => (
      <Link to={path} {...props}>
        {label}
      </Link>
    )
    link.displayName = componentName
    return link
  }

  return Object.entries(routesTree).reduce(
    (links, [routeName, nestedRoute]) => {
      const componentName =
        routeName.slice(0, 1).toUpperCase() + routeName.slice(1)
      links[componentName] = fromRoutes(nestedRoute, componentName)
      return links
    },
    {}
  )
}
