export class ImageService {
  constructor() {
    this.baseUrl = '/api/images'
  }

  getImages() {
    return fetch(this.baseUrl)
      .then(res => {
        if (!res.ok) throw res
        return res.json()
      })
      .catch(this._handleError)
  }

  uploadImage(file) {
    const formData = new FormData()
    formData.append('image', file)
    return fetch(this.baseUrl, {
      method: 'POST',
      body: formData
    })
  }

  _handleError = res => {
    return (
      res.json && res.json().then(({ message }) => console.error(message()))
    )
  }
}
