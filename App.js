import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image, Text, Button} from 'react-native';
import IntroductionCarouselScreen from './src/screens/IntroductionCarouselScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Context as AuthContext} from './src/context/AuthContext';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  const {state} = useContext(AuthContext);
  const {user} = state;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F77F00"
      barStyle={{ backgroundColor: '#003049' }}
    >
      <Tab.Screen
        name="Berita"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tournament"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Turnamen',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-trophy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tutorial"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Panduan',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            // <Icon name="ios-person" color={color} size={26} />
            <Image
              source={{uri: user.photo}}
              style={{width: 26, height: 26, borderRadius: 50, borderWidth: 1, borderColor: `${color}`}}
            />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '188222727144-fc31qrmg7j5ngn6edmmin4hd14p3jqml.apps.googleusercontent.com',
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#003049'}}>
      <NavigationContainer ref={navigation => setNavigator(navigation)}>
        <Stack.Navigator initialRouteName="Welcome">
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
          <Stack.Screen
            component={MainTabScreen}
            name="Home"
            options={{
              headerShown: false,
            }}
          />
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
