const __FAUX_REDUX_INIT__ = "__FAUX_REDUX_INIT__";

class Store {
  reducersObject = {};
  subscribers = [];

  constructor(reducers) {
    this.reducersObject = reducers;
    this.state = {};
    this.dispatch({type: __FAUX_REDUX_INIT__})
  }

  dispatch = action => {
    const newState = {};

    Object.keys(this.reducersObject).forEach(reducer => {
      // the first time, this.state is undefined
      newState[reducer] = this.reducersObject[reducer](this.state[reducer], action);
    });

    // logger
    console.group(`dispatch ${action.type}`);
    console.log(`action object: ${JSON.stringify(action)}`);
    console.log(`previous state: ${JSON.stringify(this.state)}`);
    console.log(`next state: ${JSON.stringify(newState)}`);
    console.groupEnd();

    this.state = newState;
    this.notifySubscribers();
  };

  notifySubscribers = () => {
    for (const subscriber of this.subscribers) {
      subscriber();
    }
  }

  getState = () => this.state;

  subscribe = handleChangeFunc => {
    // removes the subscriber from the array of subscribers 
    const unsubscribe = () => {
      this.subscribers = this.subscribers.filter(subscriber => {
        subscriber !== handleChangeFunc;
      });
    }
    this.subscribers.push(handleChangeFunc);
    return unsubscribe;
  };
}

const createStore = (reducersObject) => new Store(reducersObject);

export default createStore;