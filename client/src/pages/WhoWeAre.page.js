import React, { Component } from 'react'
import styles from './WhoWeAre.page.module.scss'
import { CenteredLayout } from '../layout'
import { Separator, Slide } from '../components'

const title = 'Somos una empresa'
const highlight = 'metalmecánica colombiana'
const body = `Nuestra especialidad es el diseño, fabricación y montaje de
            estructuras metálicas. Apoyamos proyectos en el sector industrial,
            comercial y residencial a través de nuestras áreas de
            ingeniería y construcción.`

export class WhoWeAre extends Component {
  render() {
    return (
      <CenteredLayout className={styles['who-we-are']}>
        <Slide
          title={title}
          highlight={highlight}
          body={body}
          header={<Separator />}
          footer={<Separator />}
        />
      </CenteredLayout>
    )
  }
}
