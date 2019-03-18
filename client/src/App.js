import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ROUTES } from './constants'
import {
  AdminPage,
  HomePage,
  GalleryPage,
  LoginPage,
  ContactUs,
  WhoWeAre,
  Portfolio
} from './pages'
import { Header } from './components'
import styles from './App.module.scss'

class App extends Component {
  state = { isAdmin: false }

  handleLogIn = () => {
    this.setState({ isAdmin: true })
  }

  render() {
    const { isAdmin } = this.state
    return (
      <div className={styles.App}>
        <Header className={styles.header} />
        <Switch>
          <Route exact path={ROUTES.home} component={HomePage} />
          <Route exact path={ROUTES.whoWeARe} component={WhoWeAre} />
          <Route exact path={ROUTES.contactUs} component={ContactUs} />
          <Route exact path={ROUTES.portfolio} component={Portfolio} />
          {/*<Route*/}
          {/*exact*/}
          {/*path={ROUTES.gallery}*/}
          {/*render={props => <GalleryPage isAdmin={isAdmin} {...props} />}*/}
          {/*/>*/}
          {/*<Route exact path={ROUTES.admin} component={AdminPage} />*/}
          {/*<Route*/}
          {/*exact*/}
          {/*path={ROUTES.login}*/}
          {/*render={props => (*/}
          {/*<LoginPage onLogin={this.handleLogIn} {...props} />*/}
          {/*)}*/}
          {/*/>*/}
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
