import React, { PureComponent } from 'react'
import styles from './Header.component.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.links} to={ROUTES.home}>
          <h1>Inicio</h1>
        </Link>
        <Link className={styles.links} to="/">
          <h1>Quiénes somos</h1>
        </Link>
        <Link className={styles.links} to="/">
          <h1>Portafolio</h1>
        </Link>
        <Link className={styles.links} to={ROUTES.gallery}>
          <h1>Galería</h1>
        </Link>
        <Link className={styles.links} to={ROUTES.gallery}>
          <h1>Contáctenos</h1>
        </Link>
        <Link className={styles.links} to={ROUTES.login}>
          <h1>Login</h1>
        </Link>
      </div>
    )
  }
}
