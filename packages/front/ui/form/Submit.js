import React from 'react'
import P from 'prop-types'

const Submit = ({ disabled, ...props }) => (
  <button type="submit" disabled={disabled} {...props}>
    Submit
  </button>
)

Submit.propTypes = {
  disabled: P.bool.isRequired
}

export default Submit
