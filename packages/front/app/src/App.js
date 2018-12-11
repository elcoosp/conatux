import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ROUTES } from '@:/constants'
import { Home, SignUp, Profile } from '@:/screens'
import { Layout } from '@:/comp'

const App = () => (
  <Layout>
    <Switch>
      <Route path={ROUTES.Home.path} component={Home} exact />
      <Route path={ROUTES.Me.Profile.path} component={Profile} />
      <Route path={ROUTES.Auth.SignUp.Path} component={SignUp} />
    </Switch>
  </Layout>
)

export default App
