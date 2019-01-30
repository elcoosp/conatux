import React from 'react'
import P from 'prop-types'
import { Formik, Form as FormikForm } from 'formik'
import { Form as UiForm, Submit } from 'ui/form'
import Errors from '@:/comp/helpers/Errors'
import getGqlErrorMessages from './getGqlErrorMessages'
import handleMutationSubmit from './handleMutationSubmit'

export const FormInner = UiForm.withComponent(FormikForm)

export const isDisabled = (isSubmitting, errors = {}) =>
  isSubmitting || Object.keys(errors).length > 0

const Form = ({
  children,
  validationSchema,
  mutation,
  mutationOptions,
  apolloError,
  ...props
}) => (
  <Formik
    {...(mutation
      ? { onSubmit: handleMutationSubmit(mutation, mutationOptions) }
      : {})}
    validationSchema={validationSchema}
    initialValues={validationSchema.cast()}
    {...props}
  >
    {({ isSubmitting, errors }) => (
      <FormInner>
        {children}
        <Submit disabled={isDisabled(isSubmitting, errors)} />
        <Errors errors={getGqlErrorMessages(apolloError)} />
      </FormInner>
    )}
  </Formik>
)

Form.propTypes = {
  children: P.node.isRequired,
  validationSchema: P.shape({
    cast: P.func.isRequired
  }).isRequired, // Yup object
  mutation: P.object, // A named mutation object
  mutationOptions: P.object, // Mutation options like update
  apolloError: P.object
}

export default Form
