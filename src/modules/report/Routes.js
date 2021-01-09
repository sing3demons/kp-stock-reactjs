import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Report from './components/Report'

export default function Routes() {
  const path = useRouteMatch()
  return (
    <Switch>
      <Route path={'/report'}>
        <Report></Report>
      </Route>
    </Switch>
  )
}
