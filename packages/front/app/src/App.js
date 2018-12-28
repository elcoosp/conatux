import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ROUTES } from '@:/constants'
import { Home, SignUp, Profile, PrivateRoute, Login } from '@:/screens'
import { Layout } from '@:/comp'

const App = () => (
  <Layout>
    <Switch>
      <Route path={ROUTES.Home.path} component={Home} exact />
      <Route path={ROUTES.Auth.SignUp.path} component={SignUp} />
      <Route path={ROUTES.Auth.Login.path} component={Login} />
      <PrivateRoute path={ROUTES.Me.Profile.path} component={Profile} />
    </Switch>
  </Layout>
)

export default App
