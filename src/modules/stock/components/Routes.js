import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Stock from './Stock'

export default function Routes() {
  const path = useRouteMatch()
  return (
    <Switch>
      <Route path={path}>
        <Stock></Stock>
      </Route>
    </Switch>
  )
}
