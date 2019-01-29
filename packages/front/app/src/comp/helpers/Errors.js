import React from 'react'
import P from 'prop-types'
import { Error } from 'ui/errors'

const Errors = ({ errors }) =>
  errors.map(error => <Error key={error}>{error}</Error>)

Errors.propTypes = {
  errors: P.arrayOf(P.string).isRequired
}

export default Errors
