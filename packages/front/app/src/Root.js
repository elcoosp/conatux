import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import client from '@:/client'
import App from './App'

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)
export default hot(module)(Root)
