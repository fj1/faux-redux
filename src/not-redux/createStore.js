const __FAUX_REDUX_INIT__ = "__FAUX_REDUX_INIT__";

class Store {
  reducersObject = {};

  constructor(reducers) {
    this.reducersObject = reducers;
    this.state = this.dispatch({type: __FAUX_REDUX_INIT__})
  }

  dispatch = action => {
    const newState = {};

    Object.keys(this.reducersObject).forEach(reducer => {
      // the first time, this.state is undefined
      newState[reducer] = this.reducersObject[reducer](this.state, action);
    });

    return newState;
  };

  getState = () => this.state;
}

const createStore = (reducersObject) => new Store(reducersObject);

export default createStore;