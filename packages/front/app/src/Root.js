import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import App from './App'
const Root = () => (
  <Router>
    <App />
  </Router>
)
export default hot(module)(Root)
