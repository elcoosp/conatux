import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Fields,
  Form,
  validation,
  handleMutationSubmit
} from '@:/comp/helpers/form'

const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(email: $email, password: $password, username: $username) {
      id
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
  <Mutation mutation={CREATE_USER}>
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
