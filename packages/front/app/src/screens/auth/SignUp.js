import React from 'react'
import { Screen, Links } from '@:/screens'
import { ROUTES } from '@:/constants'

const SignUp = () => (
  <Screen title={ROUTES.Auth.SignUp.label}>
    <Links.Me.Profile />
  </Screen>
)

export default SignUp
