import React from 'react'
import * as yup from 'yup'
import { LabelledField, Form } from '@:/comp/helpers/form'

// Use spected
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(4)
    .max(12),
  email: yup
    .string()
    .email()
    .max(40)
    .required()
})

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  username: ''
}

const SignUpForm = () => (
  <Form
    initialValues={initialValues}
    validationSchema={validationSchema}
    // onSubmit={(values, { setSubmitting }) => {}}
  >
    <LabelledField label="Username" type="text" name="username" />
    <LabelledField label="Email" type="email" name="email" />
    <LabelledField label="Password" type="password" name="password" />
    <LabelledField
      label="Password confirmation"
      type="password"
      name="passwordConfirmation"
    />
  </Form>
)

export default SignUpForm
