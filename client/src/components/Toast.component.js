import React from 'react'
import styles from './Toast.component.module.css'

export function Toast({ message }) {
  return <div className={styles.toast}>{message}</div>
}
