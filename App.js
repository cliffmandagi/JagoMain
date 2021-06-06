import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';
import IntroductionCarouselScreen from './src/screens/IntroductionCarouselScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Context as AuthContext} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const loginFlow = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#003049'}}>
      <Stack.Navigator>
        <Stack.Screen
          component={IntroductionCarouselScreen}
          name="Welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={SignInScreen}
          name="SignIn"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUp"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

const mainFlow = () => {
  return (
    <View style={{backgroundColor: '#003049', flex: 1}}>
      <BottomTab.Navigator>
        <BottomTab.Screen component={HomeScreen} name="Home" />
      </BottomTab.Navigator>
    </View>
  );
};

const App = () => {
  const {
    state: {user},
  } = useContext(AuthContext);
  useEffect(async () => {
    GoogleSignin.configure({
      webClientId:
        '188222727144-fc31qrmg7j5ngn6edmmin4hd14p3jqml.apps.googleusercontent.com',
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#003049'}}>
      <NavigationContainer ref={navigation => setNavigator(navigation)}>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen
              component={mainFlow}
              name="mainFlow"
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              component={loginFlow}
              name="loginFlow"
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
