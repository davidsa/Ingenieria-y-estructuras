import React, { Component } from 'react'
import styles from './ContactUs.page.module.scss'
import { CenteredLayout } from '../layout'
import { logoBlanco } from '../assets'

export class ContactUs extends Component {
  render() {
    return (
      <CenteredLayout className={styles.contact}>
        <div className={styles.container}>
          <img className={styles.logo} src={logoBlanco} alt="logo" />
          <div className={styles['contact-container']}>
            <p className={styles.name}>Juan David Tapias</p>
            <p>Gerente</p>
            <p>Celular: +57 3106707115</p>
            <p>gerencia@geingestructuras.com</p>
          </div>
          <div className={styles['contact-container']}>
            <p className={styles.name}>Perla Montoya</p>
            <p>Directora comercial</p>
            <p>Celular: +57 3173739878</p>
            <p>comercial@geingestructuras.com</p>
          </div>
          <div className={styles.office}>
            <p>Oficina:</p>
            <p>Cra. 82 #33-66 Medellín, Antioquia</p>
            <p>Planta de producción:</p>
            <p>Cra. 55 #76-69 Itagüi, Antioquia</p>
          </div>
        </div>
      </CenteredLayout>
    )
  }
}
