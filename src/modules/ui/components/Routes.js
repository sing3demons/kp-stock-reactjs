import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserRoutes from 'modules/users/components/Routes'
import StockRouter from 'modules/stock/components/Routes';
import Index from './Index'

export default function Routes() {
  return (
    <Switch>
      <Route path="/users">
        <UserRoutes></UserRoutes>
      </Route>
      <Route path="/stock">
       <StockRouter></StockRouter>
      </Route>
      <Route path="/">
        <Index></Index>
      </Route>
      <Route>
        <div>Page not found</div>
      </Route>
    </Switch>
  )
}
