import React from 'react'

import P from 'prop-types'
import { Form as UiForm, Submit } from 'ui/form'

const FormInner = ({ children, isSubmitting, handleReset, handleSubmit }) => (
  <UiForm onReset={handleReset} onSubmit={handleSubmit}>
    {children}
    <Submit disabled={isSubmitting} />
  </UiForm>
)

FormInner.propTypes = {
  children: P.node.isRequired,
  isSubmitting: P.bool.isRequired,
  handleReset: P.func.isRequired,
  handleSubmit: P.func.isRequired
}

export default FormInner
