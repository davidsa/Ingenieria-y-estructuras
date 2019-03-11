import React, { PureComponent } from 'react'
import { ImageService } from '../services'
import { GridLayout, CenteredLayout } from '../layout'
import { Image } from '../components'
import styles from './Gallery.page.module.scss'

export class GalleryPage extends PureComponent {
  state = {
    ids: [],
    selectedId: null
  }

  async componentDidMount() {
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
    const { selectedId } = this.state
    return (
      <div>
        <h1>Gallery</h1>
        {selectedId && (
          <CenteredLayout>
            <Image
              className={styles['selected-image']}
              src={GalleryPage.getImageUrl(selectedId)}
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
