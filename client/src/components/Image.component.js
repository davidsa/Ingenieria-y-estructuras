import React from 'react'
import styles from './Image.component.module.scss'

export function Image({ className, src, onImageClick }) {
  return (
    <div className={`${styles.container} ${className}`} onClick={onImageClick}>
      <img className={styles.image} src={src} alt="thumbnail" />
    </div>
  )
}
