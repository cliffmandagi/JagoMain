import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR_MSG':
      return {...state, errorMessage: action.payload};
    case 'SET_FIRST_TIME':
      return {...state, firstTime: action.payload};
    default:
      return state;
  }
};

const checkFirstTime = dispatch => {
  return async () => {
    try {
      const firstTime = await AsyncStorage.getItem('firstTime');
      if (!firstTime) {
        await AsyncStorage.setItem('firstTime', 'false');
        dispatch({type: 'SET_FIRST_TIME', payload: 'false'});
      } else {
        navigate('SignIn');
      }
    } catch (err) {
      dispatch({type: 'SET_ERROR_MSG', payload: err.message});
    }
  };
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {checkFirstTime},
  {firstTime: null, errorMessage: ''},
);
