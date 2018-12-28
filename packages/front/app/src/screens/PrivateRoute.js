import React from 'react'
import P from 'prop-types'
import { ROUTES } from '@:/constants'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false /** Change for real auth */ ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo || ROUTES.Auth.Login.path,
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  redirectTo: P.string
}

export default PrivateRoute
