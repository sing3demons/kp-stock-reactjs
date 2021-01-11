import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Stock from './Stock'
import StockCreate from './StockCreate'
import StockEdit from './StockEdit'

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/create`} component={StockCreate} />
      <Route path={`${path}/edit`} component={StockEdit} />
      <Route path={`${path}`} component={Stock} />
    </Switch>
  )
}
