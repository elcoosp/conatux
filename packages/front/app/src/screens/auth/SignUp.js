import React from 'react'
import { Screen, Links } from '@:/screens'
import { ROUTES } from '@:/constants'
import { SignUpForm } from '@:/comp/auth'

const SignUp = () => (
  <Screen title={ROUTES.Auth.SignUp.label}>
    <Links.Me.Profile />
    <SignUpForm />
  </Screen>
)

export default SignUp
