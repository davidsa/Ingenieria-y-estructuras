import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ROUTES } from './constants'
import { AdminPage, HomePage, GalleryPage, LoginPage, ContactUs } from './pages'
import { Header } from './components'
import { imagenContactenos, imagenInicio } from './assets'
import './App.scss'

class App extends Component {
  state = { isAdmin: false }
  static getBackgroundProperties(svg) {
    return {
      backgroundImage: `url(${svg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'cover'
    }
  }

  handleLogIn = () => {
    this.setState({ isAdmin: true })
  }

  getPageStyle() {
    const {
      location: { pathname }
    } = this.props
    const styles = {
      '/': {
        ...App.getBackgroundProperties(imagenInicio),
        backgroundImage: `linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imagenInicio})`
      },
      '/contactUs': App.getBackgroundProperties(imagenContactenos)
    }
    return styles[pathname]
  }

  render() {
    const { isAdmin } = this.state
    return (
      <div className="App" style={this.getPageStyle()}>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home} component={HomePage} />
          <Route exact path={ROUTES.contactUs} component={ContactUs} />
          <Route
            exact
            path={ROUTES.gallery}
            render={props => <GalleryPage isAdmin={isAdmin} {...props} />}
          />
          <Route exact path={ROUTES.admin} component={AdminPage} />
          <Route
            exact
            path={ROUTES.login}
            render={props => (
              <LoginPage onLogin={this.handleLogIn} {...props} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
