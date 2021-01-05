import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import Login from 'modules/users/components/Login'
import Register from './Register'

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to="/users/login"></Redirect>
      </Route>
      <Route path={`${path}/login`} component={Login}>
        <Login></Login>
      </Route>
      <Route path={`${path}/register`} component={Register}>
        <Register></Register>
      </Route>
    </Switch>
  )
}
