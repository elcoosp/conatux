import React from 'react'
import P from 'prop-types'
import { ROUTES } from '@:/constants'
import { Route, Redirect } from 'react-router-dom'
import { withAuthToken } from '@:/comp/helpers/hoc'

export const PrivateRoute = ({
  authToken,
  component: Component,
  redirectTo = ROUTES.Auth.Login.path,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  redirectTo: P.string,
  authToken: P.string
}

export default withAuthToken(PrivateRoute)
