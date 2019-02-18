import React, { PureComponent } from 'react'

export class Header extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return <div className="header">{children}</div>
  }
}
