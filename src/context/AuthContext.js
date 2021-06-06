import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR_MSG':
      return {...state, errorMessage: action.payload};
    case 'SET_FIRST_TIME':
      return {...state, firstTime: action.payload};
    case 'SET_USER_INFO':
      return {...state, user: action.payload};
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

const signin = dispatch => {
  return async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      dispatch({type: 'SET_USER_INFO', payload: user});
      navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
};

const signout = dispatch => {
  return () => {};
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {checkFirstTime, signin},
  {firstTime: null, errorMessage: '', user: null},
);
