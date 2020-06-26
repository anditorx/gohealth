import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: '',
};
// reducer is a places where stores could to changes
const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: action.value,
    };
  }
  return state;
};

// a store (store data will located in here)
const store = createStore(reducer);

export default store;
