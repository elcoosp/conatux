import React from 'react'
import P from 'prop-types'

import globalStyles from 'ui/globalStyles'

globalStyles()

const Layout = ({ children }) => <section>{children}</section>

Layout.propTypes = {
  children: P.node.isRequired
}

export default Layout
