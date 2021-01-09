import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Report from './components/Report'

export default function Routes() {
  return (
    <Switch>
      <Route path={'/report'}>
        <Report></Report>
      </Route>
    </Switch>
  )
}
