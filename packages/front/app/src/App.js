import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { ROUTES } from '@:/constants'
import { Home, SignUp, Profile } from '@:/screens'

const App = () => (
  <Fragment>
    <Route path={ROUTES.home} component={Home} exact />
    <Route path={ROUTES.me.profile} component={Profile} />
    <Route path={ROUTES.auth.signUp} component={SignUp} />
  </Fragment>
)

export default App
