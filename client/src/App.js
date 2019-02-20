import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ROUTES } from './constants'
import { AdminPage, HomePage, GalleryPage } from './pages'
import { Header } from './components'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home} component={HomePage} />
          <Route exact path={ROUTES.gallery} component={GalleryPage} />
          <Route exact path={ROUTES.admin} component={AdminPage} />
        </Switch>
      </>
    )
  }
}

export default App
