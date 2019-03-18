import React, { PureComponent } from 'react'
import styles from './Header.component.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

export class Header extends PureComponent {
  render() {
    const { className } = this.props
    return (
      <div className={`${styles.header} ${className}`}>
        <Link className={styles.links} to={ROUTES.home}>
          <h1>Inicio</h1>
        </Link>
        <Link className={styles.links} to={ROUTES.whoWeARe}>
          <h1>Quiénes somos</h1>
        </Link>
        <Link className={styles.links} to={ROUTES.portfolio}>
          <h1>Portafolio</h1>
        </Link>
        {/*<Link className={styles.links} to={ROUTES.gallery}>*/}
        {/*<h1>Galería</h1>*/}
        {/*</Link>*/}
        <Link className={styles.links} to={ROUTES.contactUs}>
          <h1>Contáctenos</h1>
        </Link>
        {/*<Link className={styles.links} to={ROUTES.login}>*/}
        {/*<h1>Login</h1>*/}
        {/*</Link>*/}
      </div>
    )
  }
}
