import React from 'react'
import P from 'prop-types'

const Screen = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
)

Screen.propTypes = { title: P.string.isRequired, children: P.node.isRequired }

export default Screen
