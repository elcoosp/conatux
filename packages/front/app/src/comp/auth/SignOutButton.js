import React from 'react'

import Auth from '@:/services/auth'
import Buttons from 'ui/buttons'

const SignOutButton = () => (
  <Buttons.Basic onClick={Auth.signOut}>Sign out</Buttons.Basic>
)
export default SignOutButton
