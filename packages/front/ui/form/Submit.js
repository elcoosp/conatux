import React from 'react'
import P from 'prop-types'

const Submit = ({ disabled }) => (
  <button type="submit" disabled={disabled}>
    Submit
  </button>
)

Submit.propTypes = {
  disabled: P.bool.isRequired
}

export default Submit
