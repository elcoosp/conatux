import React from 'react'
import { Query } from 'react-apollo'
import makeHoc from './makeHoc'
import { GET_TOKEN } from '@:/client/queries'

/* eslint-disable react/display-name */
/* TODO: Ban this rule for the whole hoc folder since we use makeHoc */
const withAuthToken = makeHoc('withAuthToken', ComponentToWrap => props => (
  <Query query={GET_TOKEN}>
    {({ data }) => (
      <ComponentToWrap
        {...props}
        authToken={
          data && data.auth && data.auth.token ? data.auth.token : null
        }
      />
    )}
  </Query>
))

export default withAuthToken
