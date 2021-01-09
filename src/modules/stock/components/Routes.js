import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Stock from './Stock'

export default function Routes() {
  return (
    <Switch>
      <Route path={'/stock'} component={Stock} />
    </Switch>
  )
}
