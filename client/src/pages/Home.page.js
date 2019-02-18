import React, { PureComponent } from 'react'

export class HomePage extends PureComponent {
  state = { img: null }
  async componentDidMount() {
    const { names } = await fetch('/api/images').then(res => res.json())
    this.setState({ img: names[0] })
  }
  render() {
    const { img } = this.state
    return (
      <div>
        <h1>Home</h1>
        {img && <img src={`/api/images/${img}`} alt="" />}
      </div>
    )
  }
}
