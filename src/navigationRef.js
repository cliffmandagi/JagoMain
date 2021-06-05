import {CommonActions} from '@react-navigation/native';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
};
// Function to be able to access the ({navigation}) from outside react component. (For example, AuthContext)
