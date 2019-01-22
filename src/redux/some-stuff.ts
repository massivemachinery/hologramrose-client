// Actions types
const ADD = 'conservator/some-stuff.js/ADD';

// Action creators
export const add = (text: string) => {
  return { type: ADD, text };
};

const initialState = {
  stuff: '',
};

// Reducer
export default function reducer(
  state: {} = initialState,
  action: { type: string; text: string },
) {
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
