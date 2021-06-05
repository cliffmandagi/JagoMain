import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'change_username':
      return {...state, username: action.payload};
    case 'change_password':
      return {...state, password: action.payload};
    default:
      return state;
  }
};

const changeUserName = dispatch => {
  return newName => {
    dispatch({type: 'change_username', payload: newName});
  };
};

const changePassword = dispatch => {
  return newPassword => {
    dispatch({type: 'change_password', payload: newPassword});
  };
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {changeUserName, changePassword},
  {username: '', password: ''},
);
