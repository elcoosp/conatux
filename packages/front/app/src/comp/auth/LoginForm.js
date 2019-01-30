import React from 'react'
import { Mutation, ApolloConsumer } from 'react-apollo'

import { Fields, Form, validation } from '@:/comp/helpers/form'
import Auth from '@:/services/auth'
import { LOGIN } from '@:/client/mutations'

const validationSchema = validation.makeSchemaFor('email', 'password')

export const makeSubmitHandler = ({ client, login }) => async (
  variables,
  { setSubmitting, setErrors } // Formik handler functions
) => {
  try {
    const {
      data: {
        login: { token }
      }
    } = await login({ variables })
    Auth.storeToken(token)
    client.writeData({ data: { auth: { token } } })
  } finally {
    setSubmitting(false)
  }
}

const LoginForm = () => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={LOGIN}>
        {(login, { loading, error, data }) => (
          <Form
            validationSchema={validationSchema}
            onSubmit={makeSubmitHandler({ client, login })}
            apolloError={error}
          >
            <Fields.Email />
            <Fields.Password />
          </Form>
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)

export default LoginForm
