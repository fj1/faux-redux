import React, {Component} from 'react'
import PropTypes from 'prop-types'

// HOC https://reactjs.org/docs/higher-order-components.html

// takes in a component
const connect = (mapStateToProps, mapDispatchToProps = () => {}, WrappedComponent) => {

  // return another component
  return class extends Component {
    static contextTypes = {
      store: PropTypes.shape({
        name: PropTypes.string
      })
    }

    componentDidMount() {
      const {store} = this.context;
      // observer pattern
      this.unsubscribe = store.subscribe(this.handleChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleChange = () => {
      this.forceUpdate();
    }

    static displayName = WrappedComponent.displayName 
    ? `Connected(${WrappedComponent.displayName})` 
    : `Connected(${WrappedComponent.name})`

    render() {
      return (
        <WrappedComponent 
          {...mapStateToProps(this.context.store.getState())}
          {...mapDispatchToProps(this.context.store.dispatch)} 
        />
      )
    }
  }
}

export default connect