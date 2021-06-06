import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
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
    case 'RESET_USER_INFO':
      return {...state, user: null};
    case 'SET_INITIALIZING':
      return {...state, initializing: action.payload};
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
        navigate('loginFlow', {screen: 'SignIn'});
      }
    } catch (err) {
      dispatch({type: 'SET_ERROR_MSG', payload: err.message});
    }
  };
};

const signin = dispatch => {
  return async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
};

const signout = dispatch => {
  return () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
};

const setUser = dispatch => {
  return async user => {
    dispatch({type: 'SET_USER_INFO', payload: user});
  };
};

const setInitializing = dispatch => {
  return async bool => {
    dispatch({type: 'SET_INITIALIZING', payload: bool});
  };
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {checkFirstTime, signin, signout, setUser, setInitializing},
  {firstTime: null, errorMessage: '', user: null, initializing: true},
);
