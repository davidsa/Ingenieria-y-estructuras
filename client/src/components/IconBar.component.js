import React from 'react'
import styles from './IconBar.component.module.scss'

export function IconBar({ icon, right }) {
  return (
    <div className={`${styles.container} ${right ? styles.right : ''}`}>
      <img className={styles.icon} src={icon} alt="portfolio item" />
    </div>
  )
}
