import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from 'modules/ui/components/Layout'
import configureStore from 'store/configureStore'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout></Layout>
      </Router>
    </Provider>
  )
}
