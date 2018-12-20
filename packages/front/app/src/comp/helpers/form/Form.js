import React from 'react'
import P from 'prop-types'
import { Formik } from 'formik'
import FormInner from './FormInner'

const Form = ({ children, ...props }) => (
  <Formik {...props}>
    <FormInner>{children}</FormInner>
  </Formik>
)

Form.propTypes = {
  children: P.node.isRequired
}

export default Form
