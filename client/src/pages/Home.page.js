import React, { PureComponent } from 'react'
import styles from './Home.page.module.scss'
import { CenteredLayout } from '../layout'
import { logo } from '../assets'

export class HomePage extends PureComponent {
  render() {
    return (
      <CenteredLayout>
        <img className={styles.logo} src={logo} alt="" />
      </CenteredLayout>
    )
  }
}
