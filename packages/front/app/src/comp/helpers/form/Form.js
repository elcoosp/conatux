import React from 'react'
import P from 'prop-types'
import { Formik, Form as FormikForm } from 'formik'
import { Form as UiForm, Submit } from 'ui/form'

const FormInner = UiForm.withComponent(FormikForm)

const Form = ({ children, ...props }) => (
  <Formik {...props}>
    {({ isSubmitting }) => (
      <FormInner>
        {children}
        <Submit disabled={isSubmitting} />
      </FormInner>
    )}
  </Formik>
)

Form.propTypes = {
  children: P.node.isRequired
}

export default Form
