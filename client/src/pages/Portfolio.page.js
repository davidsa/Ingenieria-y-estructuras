import React, { Component } from 'react'
import styles from './Portfolio.page.module.scss'
import { CenteredLayout } from '../layout'
import { Separator, Slide, IconBar } from '../components'
import {
  diseno,
  bodega,
  obras,
  iconoObras,
  iconoMetalicas,
  iconoDiseno,
  iconoBodega,
  obrasMetalicas,
  escaleras
} from '../assets'

const slides = [
  {
    title: 'Diseño de',
    highlight: 'Ingeniería',
    body:
      'Nuestro equipo esta conformado por profesionales de alta experiencía en estructuras metálicas y construcción, personas preparadas para dar solución a cada necesidad puntual del proyecto a desarrollar.',
    header: <IconBar icon={iconoDiseno} right />,
    footer: <Separator />,
    backgroundImg: diseno
  },
  {
    title: 'Bodegas industriales y',
    highlight: 'cubiertas metálicas',
    body:
      'Proyectos caracteriados por su rápida construcción, versatilidad en su diseño, simplicidad en su creación, estabilidad y solidez',
    header: <IconBar icon={iconoBodega} />,
    footer: <Separator />,
    backgroundImg: bodega
  },
  {
    title: 'Obras residenciales y',
    highlight: 'no residenciales',
    body:
      'Hacemos una fusión entre construcción tradicional y estructuras metálicas, logrando obras completas en tiempos cortos. Nuestra experiencia metalmecánica deriva en diseños eficientes, estables, más amplies y abiertos.',
    header: <IconBar icon={iconoObras} right />,
    footer: <Separator />,
    backgroundImg: obras
  },
  {
    title: 'Otras obras',
    highlight: 'Metálicas',
    body:
      'Contamos con experiencia en el diseño y fabricación de estructuras urbanas como barandas, pasamanos, o escaleras metálicas, aplicadas tambien en proyectos industriales y comerciales.',
    header: <IconBar icon={iconoMetalicas} left />,
    footer: <Separator />,
    backgroundImg: obrasMetalicas
  },
  {
    title: '',
    highlight: 'Especialistas en',
    body:
      'Escaleras metálicas para salidas de emergencia, pasamanos, pérgolas y pasarelas industriales',
    header: null,
    footer: <Separator />,
    backgroundImg: escaleras
  }
]

export class Portfolio extends Component {
  render() {
    return (
      <div className={styles.portfolio}>
        <div
          className={`${styles.slide} ${styles.right}`}
          style={{ backgroundImage: `url(${slides[0].backgroundImg})` }}
        >
          <CenteredLayout>
            <Slide
              title={slides[0].title}
              highlight={slides[0].highlight}
              body={slides[0].body}
              header={slides[0].header}
              footer={slides[0].footer}
            />
          </CenteredLayout>
        </div>
        <div
          className={`${styles.slide} ${styles.left}`}
          style={{ backgroundImage: `url(${slides[1].backgroundImg})` }}
        >
          <CenteredLayout className={styles['second-slide']}>
            <Slide
              title={slides[1].title}
              highlight={slides[1].highlight}
              body={slides[1].body}
              header={slides[1].header}
              footer={slides[1].footer}
            />
          </CenteredLayout>
        </div>
        <div
          className={`${styles.slide} ${styles.right}`}
          style={{ backgroundImage: `url(${slides[2].backgroundImg})` }}
        >
          <CenteredLayout className={styles['third-slide']}>
            <Slide
              title={slides[2].title}
              highlight={slides[2].highlight}
              body={slides[2].body}
              header={slides[2].header}
              footer={slides[2].footer}
            />
          </CenteredLayout>
        </div>
        <div
          className={`${styles.slide} ${styles.left}`}
          style={{ backgroundImage: `url(${slides[3].backgroundImg})` }}
        >
          <CenteredLayout className={styles['fourth-slide']}>
            <Slide
              title={slides[3].title}
              highlight={slides[3].highlight}
              body={slides[3].body}
              header={slides[3].header}
              footer={slides[3].footer}
            />
          </CenteredLayout>
        </div>
        <div
          className={`${styles.slide} ${styles.left}`}
          style={{ backgroundImage: `url(${slides[4].backgroundImg})` }}
        >
          <CenteredLayout className={styles['fifth-slide']}>
            <Slide
              title={slides[4].title}
              highlight={slides[4].highlight}
              body={slides[4].body}
              header={slides[4].header}
              footer={slides[4].footer}
            />
          </CenteredLayout>
        </div>
      </div>
    )
  }
}
