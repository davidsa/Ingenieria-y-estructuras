import React, { PureComponent } from 'react'
import { ImageService } from '../services'
import { GridLayout, CenteredLayout } from '../layout'
import { Image } from '../components'
import styles from './Gallery.page.module.scss'
import { ROUTES } from '../constants'

export class GalleryPage extends PureComponent {
  state = {
    ids: [],
    selectedId: null
  }

  handleDelete = async id => {
    try {
      const service = new ImageService()
      const result = await service.deleteImage(id)
      console.log('delete result: ', result)
      this.fetchImages()
    } catch (error) {
      this.props.history.push(ROUTES.login)
    }
  }

  async componentDidMount() {
    const { isAdmin } = this.props
    console.log('isAdmin: ', isAdmin)
    this.fetchImages()
  }

  async fetchImages() {
    const service = new ImageService()
    const { ids } = await service.getImages()
    this.setState({ ids, selectedId: ids[0] })
  }

  static getImageUrl(id) {
    return `api/images/${id}`
  }

  handleThumbnailClick = id => {
    this.setState({ selectedId: id })
  }

  renderThumbnails() {
    const { ids } = this.state
    return ids.map((id, index) => (
      <Image
        key={index}
        src={GalleryPage.getImageUrl(id)}
        onImageClick={() => this.handleThumbnailClick(id)}
      />
    ))
  }

  render() {
    const {
      state: { selectedId },
      props: { isAdmin }
    } = this
    return (
      <div>
        <h1>Gallery</h1>
        {selectedId && (
          <CenteredLayout>
            <Image
              className={styles['selected-image']}
              src={GalleryPage.getImageUrl(selectedId)}
              showClose={isAdmin}
              onClose={e => {
                console.log('being called')
                this.handleDelete(selectedId)
              }}
            />
          </CenteredLayout>
        )}
        <GridLayout className={styles.grid}>
          {this.renderThumbnails()}
        </GridLayout>
      </div>
    )
  }
}
