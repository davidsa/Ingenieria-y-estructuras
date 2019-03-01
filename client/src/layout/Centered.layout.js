import React from 'react'
import styles from './Centered.layout.module.scss'

export function CenteredLayout({ children, className }) {
  return <div className={`${styles.centered} ${className}`}>{children}</div>
}
