import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default App;
