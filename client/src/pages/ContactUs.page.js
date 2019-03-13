import React, { Component } from 'react'
import styles from './ContactUs.page.module.scss'
import { CenteredLayout } from '../layout'

export class ContactUs extends Component {
  render() {
    return (
      <CenteredLayout className={styles.contact}>
        <h1>logo</h1>
        <div>
          <div className={styles.container}>
            <span className={`${styles.block} ${styles['margin-right']}`} />
            <p className={styles.name}>Juan David Tapias</p>
          </div>
          <div className={styles.container}>
            <span className={`${styles.block} ${styles['margin-right']}`} />
            <p>Gerente</p>
          </div>
          <p>Celular: +57 3106707115</p>
          <p>gerencia@geingestructuras.com</p>
        </div>
        <div>
          <div className={styles.container}>
            <p className={styles.name}>Perla Montoya</p>
            <span className={`${styles.block} ${styles['margin-left']}`} />
          </div>
          <div className={styles.container}>
            <p>Directora comercial</p>
            <span className={`${styles.block} ${styles['margin-left']}`} />
          </div>
          <p>Celular: +57 3173739878</p>
          <p>comercial@geingestructuras.com</p>
        </div>
        <div className={styles.office}>
          <p>Oficina:</p>
          <p>Cra. 82 #33-66 Medellín, Antioquia</p>
          <p>Planta de producción:</p>
          <p>Cra. 55 #76-69 Itagüi, Antioquia</p>
        </div>
      </CenteredLayout>
    )
  }
}
