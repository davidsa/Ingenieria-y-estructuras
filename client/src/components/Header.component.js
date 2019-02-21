import React, { PureComponent } from 'react'
import styles from './Header.component.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.links} to={ROUTES.home}>
          Home
        </Link>
        <Link className={styles.links} to={ROUTES.gallery}>
          Gallery
        </Link>
        <Link className={styles.links} to={ROUTES.login}>
          Login
        </Link>
      </div>
    )
  }
}
