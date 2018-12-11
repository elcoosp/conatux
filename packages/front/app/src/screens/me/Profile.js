import React from 'react'
import { Screen, Links } from '@:/screens'
import { ROUTES } from '@:/constants'

const Profile = () => (
  <Screen title={ROUTES.Me.Profile.label}>
    <Links.Home />
  </Screen>
)

export default Profile
