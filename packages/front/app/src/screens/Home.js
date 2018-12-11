import React from 'react'
import { Screen, Links } from '@:/screens'
import { ROUTES } from '@:/constants'

const Home = () => (
  <Screen title={ROUTES.Home.label}>
    <Links.Auth.SignUp />
  </Screen>
)

export default Home
