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
    <View style={{flex: 1, backgroundColor: '#003049'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            component={IntroductionCarouselScreen}
            name="Welcome"
            options={{
              headerShown: false,
              cardStyle: {backgroundColor: 'black'},
            }}
          />
          <Stack.Screen
            component={SignInScreen}
            name="SignIn"
            options={{
              headerShown: false,
              cardStyle: {backgroundColor: 'black'},
            }}
          />
          <Stack.Screen
            component={SignUpScreen}
            name="SignUp"
            options={{
              headerShown: false,
              cardStyle: {backgroundColor: 'black'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
