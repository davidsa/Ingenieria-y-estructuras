import React from 'react'
import styles from './Toast.component.module.scss'

export function Toast({ message }) {
  return <div className={styles.toast}>{message}</div>
}
