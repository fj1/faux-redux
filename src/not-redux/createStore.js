const createStore = () => {
  console.log('inside createStore');
  const store = {
    name: ''
  }

  return {
    store,
    getState: () => store,
    onNameChange: () => {},
  }
}

export default createStore;

// create the store object with state and dispatch
// redux needs to dispatch an action to determine the initial state (@@INIT) from each reducer
// store keep track of the state in memory