import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Layout from 'modules/ui/components/Layout'
import configureStore, { history } from 'store/configureStore'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout></Layout>
      </ConnectedRouter>
    </Provider>
  )
}
