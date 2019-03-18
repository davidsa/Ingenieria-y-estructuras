import React, { PureComponent } from 'react'
import styles from './Home.page.module.scss'
import { CenteredLayout } from '../layout'
import { logo } from '../assets'

export class HomePage extends PureComponent {
  render() {
    return (
      <CenteredLayout className={styles.home}>
        <img className={styles.logo} src={logo} alt="" />
        <a
          className={styles.instagram}
          href="https://www.instagram.com/ing_y_estru/"
          target="_blank"
          rel="noopener"
        >
          <i className={`fab fa-instagram ${styles.icon}`} />
        </a>
      </CenteredLayout>
    )
  }
}
