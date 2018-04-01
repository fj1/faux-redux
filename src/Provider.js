import {Component} from 'react'

class Provider extends Component {
  render() {
    const {children} = this.props;
    return (
      children ? children : null
    )
  }
}

export default Provider
