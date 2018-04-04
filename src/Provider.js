import {Component} from 'react'
import {PropTypes} from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {
      name: 'Jean-Luc'
    }
  }
  
  render() {
    const {children} = this.props;
    return (
      children ? children : null
    )
  }
}

Provider.childContextTypes = {
  name: PropTypes.string
}

export default Provider
