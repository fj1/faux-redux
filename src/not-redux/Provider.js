import {Component} from 'react'
import {PropTypes} from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
      // getState: this.props.func
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
  store: PropTypes.shape({
    name: PropTypes.string,
    // getState: PropTypes.func
  }),
}

export default Provider
