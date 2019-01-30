import React from 'react'
import { Redirect } from 'react-router-dom'
import P from 'prop-types'

import { LoginForm } from '@:/comp/auth'
import { Screen } from '@:/screens'
import { ROUTES } from '@:/constants'
import { withAuthToken } from '@:/comp/helpers/hoc'

export const Login = ({ authToken }) =>
  authToken ? (
    <Redirect to={{ pathname: ROUTES.Me.Profile.path }} />
  ) : (
    <Screen title={ROUTES.Auth.Login.label}>
      <LoginForm />
    </Screen>
  )

Login.propTypes = {
  authToken: P.string
}

export default withAuthToken(Login)
