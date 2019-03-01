import React from 'react'
import styles from './Grid.layout.module.scss'

export function GridLayout({ children, className }) {
  return <div className={`${styles.grid} ${className}`}>{children}</div>
}
