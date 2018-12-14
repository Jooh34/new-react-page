// Actions
const SET_CATEGORY = 'service/SET_CATEGORY';

// Action Creators
export const setCategory = category => ({ type: SET_CATEGORY, category});

const initialState = {
  category : 'opengl'
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
}
