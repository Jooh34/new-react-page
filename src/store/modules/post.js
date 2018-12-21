// Actions
const Add_POST = 'post/ADD_POST';

const ADD_CONTENT_BLOCK = 'post/ADD_CONTENT_BLOCK';
const DELETE_CONTENT_BLOCK = 'post/DELETE_CONTENT_BLOCK';
const SWAP_CONTENT_BLOCK = 'post/SWAP_CONTENT_BLOCK';
const CHANGE_CONTENT_TYPE = 'post/CHANGE_CONTENT_TYPE';
const CHANGE_CONTENT_TEXT = 'post/CHANGE_CONTENT_TEXT';

// Action Creators
export const addPost = post => ({ type: Add_POST, post });

export const addContentBlock = () => ({ type: ADD_CONTENT_BLOCK });
export const deleteContentBlock = (index) => ({ type: DELETE_CONTENT_BLOCK, index });
export const swapContentBlock = (index) => ({ type: SWAP_CONTENT_BLOCK, index });
export const changeContentType = (index, block_type) => ({ type: CHANGE_CONTENT_TYPE, index, block_type });
export const changeContentText = (index, text) => ({ type: CHANGE_CONTENT_TEXT, index, text });

const initialState = {
  posts: [],
  post: {
    title: '',
    description: '',
    contents: [],
    next_id: 0,
  },
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case Add_POST:
      return {
        ...state,
        posts: state.posts.push(action.post),
      };

    case ADD_CONTENT_BLOCK:
      return {
        ...state,
        post: {
          ...post,
          contents: [
            ...state.post.contents,
            {
              type:'',
              text:'',
              id: state.post.next_id,
            }
          ],
          next_id: state.post.next_id + 1,
        }
      }

    case DELETE_CONTENT_BLOCK:
      return {
        ...state,
        post: {
          ...state.post,
          contents: state.post.contents.filter((item, index) => index !== action.index),
        }
      }

    case SWAP_CONTENT_BLOCK:
      const arr = state.post.contents.slice();
      const index = action.index;
      const temp = arr[index];
      arr[index] = arr[index+1];
      arr[index+1] = temp;

      return {
        ...state,
        post: {
          ...state.post,
          contents: arr,
        }
      }

    case CHANGE_CONTENT_TYPE:
      return {
        ...state,
        post: {
          ...state.post,
          contents: state.post.contents.map(
            (content, i) => (i === action.index) ? {
              ...content,
              type: action.block_type
            } : content
          )
        }
      }

    case CHANGE_CONTENT_TEXT:
      return {
        ...state,
        post: {
          ...state.post,
          contents: state.post.contents.map(
            (content, i) => (i === action.index) ? {
              ...content,
              text: action.text
            } : content
          )
        }
      }
    default:
      return state;
  }
}
