import React, { PureComponent } from 'react'
import { CenteredLayout } from '../layout'
import { logo } from '../assets'
export class HomePage extends PureComponent {
  render() {
    return (
      <CenteredLayout>
        <img src={logo} alt="" />
      </CenteredLayout>
    )
  }
}
