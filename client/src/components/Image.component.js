import React from 'react'
import styles from './Image.component.module.scss'

export function Image({ className, src, showClose, onClose, onImageClick }) {
  return (
    <div className={`${styles.container} ${className}`} onClick={onImageClick}>
      {showClose && (
        <button className={`${styles.close}`} onClick={onClose}>
          <i className="far fa-window-close" />
        </button>
      )}
      <img className={styles.image} src={src} alt="thumbnail" />
    </div>
  )
}
