export class AuthService {
  constructor() {
    this.baseUrl = '/api/auth'
  }

  login(username, password) {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (!res.ok) throw res
        return res.json()
      })
      .catch(this._handleError)
  }

  _handleError = res => {
    return res.json && res.json().then(({ message }) => console.error(message))
  }
}
