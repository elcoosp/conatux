import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Fields,
  Form,
  validation,
  handleMutationSubmit
} from '@:/comp/helpers/form'

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(email: $email, password: $password, username: $username) {
      user {
        id
      }
      token
    }
  }
`
const validationSchema = validation.makeSchemaFor(
  'email',
  'username',
  'password',
  'passwordConfirmation'
)

const SignUpForm = () => (
  <Mutation mutation={SIGN_UP}>
    {(createUser, { loading, error, data }) => (
      <Form
        validationSchema={validationSchema}
        initialValues={validationSchema.cast()}
        onSubmit={handleMutationSubmit({ createUser })}
      >
        <Fields.Username />
        <Fields.Email />
        <Fields.Password />
        <Fields.PasswordConfirmation />
      </Form>
    )}
  </Mutation>
)

export default SignUpForm
