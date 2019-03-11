import React, { PureComponent } from 'react'
import styles from './Login.page.module.scss'
import { CenteredLayout } from '../layout'
import { AuthService } from '../services'
import { ROUTES } from '../constants'

export class LoginPage extends PureComponent {
  state = {
    username: '',
    password: ''
  }

  async componentDidMount() {
    try {
      const service = new AuthService()
      const { username } = await service.me()
      if (username) {
        this.props.history.push(ROUTES.admin)
      }
    } catch (error) {}
  }

  handleInputChange = event => {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const service = new AuthService()
    const { username, password } = this.state
    if (!username || !password) return
    const { status } = await service.login(username, password)
    if (status && status === 'ok') {
      this.props.history.push(ROUTES.admin)
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <CenteredLayout>
        <form className={styles['login-form']} onSubmit={this.handleSubmit}>
          <input
            className={styles['login-item']}
            id="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            className={styles['login-item']}
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <CenteredLayout>
            <button className={styles['login-button']} type="submit">
              Login
            </button>
          </CenteredLayout>
        </form>
      </CenteredLayout>
    )
  }
}
