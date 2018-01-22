// Actions types
const ADD = 'conservator/some-stuff.js/ADD';

// Action creators
export const add = (text) => {
  return {type: ADD, text};
};

const initialState = {
  stuff: '',
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD: {
      return {
        ...state,
        stuff: action.text,
      };
    }

    default: {
      return state;
    }
  }
}
