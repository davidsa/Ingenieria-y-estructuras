import React, { PureComponent } from 'react'
import { CenteredLayout } from '../layout'
import { AuthService } from '../services'
import { ROUTES } from '../constants'

export class LoginPage extends PureComponent {
  state = {
    username: '',
    password: ''
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
    return (
      <CenteredLayout>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User name:</label>
            <input
              id="username"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
          <CenteredLayout>
            <button type="submit">Login</button>
          </CenteredLayout>
        </form>
      </CenteredLayout>
    )
  }
}
