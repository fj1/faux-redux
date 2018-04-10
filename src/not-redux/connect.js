import React, {Component} from 'react'
import PropTypes from 'prop-types'

// HOC https://reactjs.org/docs/higher-order-components.html

// takes in a component
const connect = (WrappedComponent, action) => {

  // return another component
  return class extends Component {
    static contextTypes = {
      store: PropTypes.shape({
        name: PropTypes.string
      }),
      storeActions: PropTypes.shape({
        getName: PropTypes.func,
        setName: PropTypes.func
      })
    }

    static displayName = WrappedComponent.displayName 
    ? `Connected(${WrappedComponent.displayName})` 
    : `Connected(${WrappedComponent.name})`

    render() {
      return <WrappedComponent store={this.context.store} storeActions={this.context.storeActions} />
    }
  }
}

export default connect