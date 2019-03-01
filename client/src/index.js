import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/base.scss'
import App from './App'

const render = Component => {
  return ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('Hot module replacement...')
    const NextApp = require('./App').default
    render(NextApp)
  })
}
