import React, { PureComponent } from 'react'
import { CenteredLayout } from '../layout'
import { ImageService } from '../services'
import { ROUTES } from '../constants'

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
    const { message, redirect } = await service.uploadImage(image)
    if (redirect) {
      return this.props.history.push(ROUTES.login)
    }
    return console.log(message)
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
