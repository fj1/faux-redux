import * as actions from './appActionTypes';

const initialState = {
  name: 'Spock'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_NAME: 
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
};

export default reducer;
