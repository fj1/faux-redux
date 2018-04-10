import React, {Component} from 'react'
import PropTypes from 'prop-types'

// HOC https://reactjs.org/docs/higher-order-components.html

// takes in a component
const connect = (WrappedComponent, action) => {

  // return another component
  return class extends Component {
    constructor(props) {
      super(props)
    }

    static contextTypes = {
      store: PropTypes.shape({
        name: PropTypes.string
      })
    }

    storeActions = {
      getName: () => {return this.context.store.name},
      setName: name => {this.setState({store: {name}})}
    }
    
    static displayName = WrappedComponent.displayName 
    ? `Connected(${WrappedComponent.displayName})` 
    : `Connected(${WrappedComponent.name})`

    render() {
      return <WrappedComponent store={this.context.store} storeActions={this.storeActions} />
    }
  }
}

export default connect