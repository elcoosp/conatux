import React from 'react'
import P from 'prop-types'

const Layout = ({ children }) => <section>{children}</section>

Layout.propTypes = {
  children: P.node.isRequired
}

export default Layout
