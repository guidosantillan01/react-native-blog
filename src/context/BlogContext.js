import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'EDIT_BLOGPOST':
      return state;
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content) => {
    dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } });
  };
};

const actions = {
  addBlogPost,
  deleteBlogPost,
  editBlogPost
};

const initialState = [
  { id: 'Q1W2E3', title: 'TEST POST', content: 'TEST CONTENT' }
];

export const { Context, Provider } = createDataContext(
  blogReducer,
  actions,
  initialState
);
