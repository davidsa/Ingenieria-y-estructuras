import React from 'react'
import styles from './Slide.component.module.scss'

export function Slide({ title, highlight, body, header, footer }) {
  return (
    <div className={styles.slide}>
      <div>{header}</div>
      <h1 className={styles.title}>
        {title} <span className={styles.highlight}>{highlight}</span>
      </h1>
      <p className={styles.body}>{body}</p>
      <div>{footer}</div>
    </div>
  )
}
