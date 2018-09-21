import { SET_CATEGORY } from '../actions';
import { combineReducers } from 'redux';

const InitialState = {
    category : 'opengl'
};

const postReducer = (state = InitialState, action) => {
    switch(action.type) {
        case SET_CATEGORY:
          return {
            ...state,
            category : action.category,
          }

        default:
          return state;
    }
};

// const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
    postReducer,
});

export default rootReducer;
