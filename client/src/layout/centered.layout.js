import React from 'react'
import styles from './centered.layout.module.css'

export function CenteredLayout({ children }) {
  return <div className={styles.centered}>{children}</div>
}
