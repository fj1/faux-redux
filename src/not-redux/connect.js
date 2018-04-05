import React, {Component} from 'react'

// HOC https://reactjs.org/docs/higher-order-components.html

// takes in a component
const connect = (WrappedComponent, storeActions) => {

  // return another component
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        store: {
          name: 'Kirk'
        }
      }
    }

    static displayName = WrappedComponent.displayName 
      ? `Connected(${WrappedComponent.displayName})` 
      : `Connected(${WrappedComponent.name})`

    render() {
      return <WrappedComponent store={this.state.store} />
    }
  }
}

export default connect