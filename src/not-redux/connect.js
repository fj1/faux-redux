import React, {Component} from 'react'

// HOC https://reactjs.org/docs/higher-order-components.html

// takes in a component
const connect = (WrappedComponent, action) => {

  // return another component
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        store: {
          name: ''
        }
      }
    }

    storeActions = {
      getName: () => {return this.state.store.name},
      setName: name => {this.setState({store: {name}})}
    }

    static displayName = WrappedComponent.displayName 
      ? `Connected(${WrappedComponent.displayName})` 
      : `Connected(${WrappedComponent.name})`

    render() {
      return <WrappedComponent store={this.state.store} storeActions={this.storeActions} />
    }
  }
}

export default connect