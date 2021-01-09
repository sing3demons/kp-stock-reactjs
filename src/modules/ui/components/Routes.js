import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import UserRoutes from 'modules/users/components/Routes'
import StockRouter from 'modules/stock/components/Routes'
import Index from './Index'
import ReportRouter from 'modules/report/Routes'
import * as loginAcction from 'modules/actions/login.action'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loginAcction.isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/users/login" />
      )
    }
  />
)
const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loginAcction.isLoggedIn() ? (
        <Redirect to="/stock" />
      ) : (
        <Component {...props} />
      )
    }
  />
)

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/stock">
        <StockRouter></StockRouter>
      </PrivateRoute>
      <LoginRoute path="/users" component={UserRoutes} />
      <PrivateRoute path="/report" component={ReportRouter} />
      <PrivateRoute exact path="/" component={Index} />
      <Route>
        <div>Page not found</div>
      </Route>
    </Switch>
  )
}
