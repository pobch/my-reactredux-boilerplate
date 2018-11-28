import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Example from './components/Example'
import NotFound from './components/NotFound'

/* eslint-disable */
const App = props => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" render={routerProps => <Redirect to="/" />} />
          <Route exact path="/example/:id(\d+)" component={Example} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
/* eslint-enable */

export default App
