import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ROUTES } from './constants'
import { AdminPage, HomePage } from './pages'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.home} component={HomePage} />
        <Route exact path={ROUTES.admin} component={AdminPage} />
      </Switch>
    )
  }
}

export default App
