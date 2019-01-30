import React from 'react'
import { Screen, Links } from '@:/screens'
import { ROUTES } from '@:/constants'
import { SignOutButton } from '@:/comp/auth'

const Profile = () => (
  <Screen title={ROUTES.Me.Profile.label}>
    <Links.Home />
    <SignOutButton />
  </Screen>
)

export default Profile
