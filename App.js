import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import IntroductionCarouselScreen from './src/screens/IntroductionCarouselScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Welcome"> */}
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          // component={IntroductionCarouselScreen}
          component={SignInScreen}
          name="SignIn"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUp"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
