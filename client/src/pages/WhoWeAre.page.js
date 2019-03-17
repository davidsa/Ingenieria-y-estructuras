import React, { Component } from 'react'
import styles from './WhoWeAre.page.module.scss'
import { CenteredLayout } from '../layout'

export class WhoWeAre extends Component {
  render() {
    return (
      <CenteredLayout>
        <div className={styles.container}>
          <div className={styles.separator} />
          <h1 className={styles.title}>
            Somos una empresa
            <span className={styles['thick-title']}>
              &nbsp; metalmecánica colombiana
            </span>
          </h1>
          <p className={styles.content}>
            Nuestra especialidad es el diseño, fabricación y montaje de
            estructuras metálicas. Apoyamos proyectos en el sector industrial,
            &nbsp;comercial y residencial a través de nuestras áreas de
            ingeniería y construcción.
          </p>
          <div className={styles.separator} />
        </div>
      </CenteredLayout>
    )
  }
}
