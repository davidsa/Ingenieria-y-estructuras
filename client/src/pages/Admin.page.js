import React, { PureComponent } from 'react'
import { CenteredLayout } from '../layout'
import { ImageService } from '../services'

export class AdminPage extends PureComponent {
  state = {
    image: null
  }

  onFileChange = event => {
    const {
      files: [file]
    } = event.target
    this.setState({ image: file })
  }

  onSubmit = async event => {
    event.preventDefault()
    const { image } = this.state
    if (!image) return
    const service = new ImageService()
    const response = await service.uploadImage(image)
    console.log(response)
    return false
  }

  render() {
    return (
      <CenteredLayout>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="file">Upload file:</label> <br />
            <input id="file" type="file" onChange={this.onFileChange} />
          </div>
          <CenteredLayout>
            <input type="submit" />
          </CenteredLayout>
        </form>
      </CenteredLayout>
    )
  }
}
