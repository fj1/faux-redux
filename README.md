# faux-redux
Exercise to build a version of redux for fun and as a learning opportunity. Affectionately also known as fauxdux.

Many thanks to [Chris](https://github.com/chrismiceli) for the inspiration and for pair-programming with me.

## Faux-dux: Building Redux from Scratch

An overview of this exercise was given as a 20 minute presentation.

The goal was to have our own implementation of Redux that would update when an user types their name in a text input box. An outline of the presentation follows.

🔶 The first step was to use [Create React App](https://github.com/facebook/create-react-app) for the ease of set-up.

🔶 Then, immediately removed some parts of the Create React App, including the contents of the App component, CSS, and the React svg logo.

🔶 Created the Greeting component with only some text and an input box.

🔶 Created the Provider component, and hooked up Greeting with Provider using [React Context v15](https://reactjs.org/docs/context.html) only.

  * Notice that the Provider component wraps the App component in App.js.
  
  * As the parent component, Provider needs to define get the `ChildContext()` function (which returns an object that is the data we want) and the static prop `childContextTypes` (that defines the type of the data we will be passing).

  * As the grandchild component, Greeting needs the static prop `contextTypes` to define the data type. Then, the data is available as `this.context.<data>`.

  * At this point, if we hardcoded the name 'Kirk' in the Provider's store.name, Greeting now shows the name Kirk in the UI. 🎉

🔶 Create connect.js. As a [Higher Order Component](https://reactjs.org/docs/higher-order-components.html), it takes in a component, and returns a new component.

  * No lifecycle methods are in connect.js at this point. It takes in the Greeting component, wraps it, and returns returns the wrapped component.

🔶 Now let's add the appReducer. 

  * At first, appReducer only takes in a state and an action and returns the state. It literally does nothing but returns the state it was given, and sets the default state to `{name: 'Spock'}`.

  * Later, the appReducer is updated to handle the `UPDATE_NAME` action, in addition to the default case.

🔶 Add mapStateToProps and mapDispatchToProps.

  * Update the return statement in connect.js.

    * The return statement for connect.js is updated. The mapStateToProps is spread and calls getState(). The code looks like this: `{...mapStateToProps(this.context.store.getState())}`

    * Also, `mapDispatchToProps` now calls the store's dispatch action, like so: `{...mapDispatchToProps(this.context.store.dispatch)} `. 
    
  * In addition, in connect.js `mapDispatchToProps` defaults to a function that returns an empty object.

  * The Greeting component is updated to include `mapStateToProps()` and `mapDispatchToProps()`. 
  
    * Now `mapStateToProps()` returns an object with the data in the store that we care about (in this case, the name) and adds the name to the Greeting component's props. 
    
    * By adding `mapDispatchToProps()`, the store's `dispatch()` function is available to send actions to update the store. 

🔶 Implement `createStore()` in createStore.js

  * Create the [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) Store in createStore.js

  * Add the `__FAUX_REDUX_INIT__` action type. This will be used by dispatch() in the constructor when the Store is initialized.

  * Add `dispatch()`. This function takes an action and then iterates through the reducers in order to create a `newState` object.

  * Add `getState()`, which returns `this.state`.

  * `createStore()` now takes in a reducersObject and returns a new Store. For example, `createStore()` is called in App.js with the appReducer object.

🔶 At this point, we have a store and a read-only version of faux-dux. 🎉 🎉

🔶 Add a subscriber.

  * Update connect.js, which is returns a wrapped component.
  
    * Add [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount), which implements an [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern).

    * Add [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount), which calls this.unsubscribe().

    * Add the new function `handleChange()`, which calls [`forceUpdate()`](https://reactjs.org/docs/react-component.html#forceupdate).

  * Implement the subscribers in createStore.js:

    * Add an array of subscribers to the Store class.

    * Add the `subscribers()` function. This takes in the `handleChangeFunction()` function. It updates the list of subscribers. It returns an unsubscribe function, which allows the subscriber to unsubscribe when the connect HOC is unmounted. 

    * Add the `notifySubscribers()` function, which iterates through the array of subscribers and calls the `subscribers()` on each of them. The subscriber's function is the `handleChange()` that is on the connect HOC.

    * Add `this.notifySubscribers()` to the end of the `dispatch()` function. This is so that when the state is updated the subscribers find out about the change.

🔶 Now the store updates when the user inputs text! 🎉 🎉 🎉

🔶 In review:

  * At first, the store is initialized with the action `__FAUX_REDUX_INIT__`. The Provider allows the store to be available via context, and connect wraps the Greeting component and also gives mapStateToProps and mapDispatchToProps to the Greeting component. Since there is no state yet, the default name is Spock.

  * The user types their name into the input box. `handleInputChange()` is called with the new name, and it dispatches `onNameChange()`. Then, `dispatch()` calls the appReducer. The reducer takes the new name and returns the new state. `dispatch()` then sets the Store's state as the new state and calls `notifySubscribers()`.

  * All the subscribers are updated with the new state. The component is forced to update, thus rerendering the UI and showing the updated name.