import {Component} from 'react'
import {PropTypes} from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.store,
      storeActions: this.storeActions
    }
  }

  store = {
    name: 'Spock'
  }

  storeActions = {
    getName: () => this.store.name,
    setName: name => this.store = {...this.store, name}
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
    name: PropTypes.string
  }),
  storeActions: PropTypes.shape({
    getName: PropTypes.func,
    setName: PropTypes.func
  })
}

export default Provider
