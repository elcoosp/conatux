import * as yup from 'yup'

const messages = {
  required: fieldName => `${fieldName} is required`,
  valid: fieldName => `${fieldName} must be a valid one`
}

const username = yup
  .string()
  .min(4)
  .max(12)
  .required()
  .default('')

const email = yup
  .string()
  .email(messages.valid('Email'))
  .max(40)
  .required(messages.required('Email'))
  .default('')

const password = yup
  .string()
  .min(12)
  .max(100)
  .required(messages.required('Password'))
  .default('')

const passwordConfirmation = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match') // null is mandatory here (cf. https://github.com/jaredpalmer/formik/issues/90)
  .required(messages.required('Password confirmation'))
  .default('')

export const fields = {
  email,
  username,
  password,
  passwordConfirmation
}

const validation = {
  makeSchemaFor: (...fieldNames) => {
    return yup.object().shape(
      fieldNames.reduce((acc, name) => {
        acc[name] = fields[name]
        return acc
      }, {})
    )
  }
}

export default validation
