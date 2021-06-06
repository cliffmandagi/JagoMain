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
    case 'SET_INITIALIZING':
      return {...state, initializing: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
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

const signInWithGoogle = dispatch => {
  return async () => {
    dispatch({type: 'SET_LOADING', payload: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(() => dispatch({type: 'SET_LOADING', payload: false}));
  };
};

const signInWithEmail = dispatch => {
  return (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        dispatch({
          type: 'SET_ERROR_MSG',
          payload: 'Ada yang salah sama informasi kamu',
        });
      });
  };
};

const signout = dispatch => {
  return () => {
    auth().signOut();
  };
};

const signup = dispatch => {
  return (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch({type: 'SET_ERROR_MSG', payload: 'Email udah kepake!'});
        }

        if (error.code === 'auth/invalid-email') {
          dispatch({type: 'SET_ERROR_MSG', payload: 'Email invalid!'});
        }

        if (error.code === 'auth/weak-password') {
          dispatch({type: 'SET_ERROR_MSG', payload: 'Password kurang kuat!'});
        }
      });
  };
};

const setErrorMsg = dispatch => {
  return error => {
    dispatch({type: 'SET_ERROR_MSG', payload: error});
  };
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {
    checkFirstTime,
    signInWithGoogle,
    signInWithEmail,
    signup,
    signout,
    setUser,
    setInitializing,
    setErrorMsg,
  },
  {
    firstTime: null,
    errorMessage: '',
    user: null,
    initializing: true,
    loading: false,
  },
);
