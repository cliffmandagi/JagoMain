import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image, ActivityIndicator} from 'react-native';
import IntroductionCarouselScreen from './src/screens/IntroductionCarouselScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Context as AuthContext} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import ListNewsScreen from './src/screens/ListNewsScreen';
import AccountScreen from './src/screens/AccountScreen';

const Stack = createStackNavigator();

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

const Tab = createMaterialBottomTabNavigator();

const mainFlow = () => {
  const {state} = useContext(AuthContext);
  const {user} = state;
  if (!user)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#003049',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F77F00"
      barStyle={{backgroundColor: '#003049'}}>
      <Tab.Screen
        name="Berita"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tournament"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Turnamen',
          tabBarIcon: ({color}) => (
            <Icon name="ios-trophy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tutorial"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Panduan',
          tabBarIcon: ({color}) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color}) => (
            <Image
              source={{uri: user.photoURL}}
              style={{
                width: 26,
                height: 26,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: `${color}`,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const {
    state: {user, initializing},
    setUser,
    setInitializing,
  } = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '188222727144-fc31qrmg7j5ngn6edmmin4hd14p3jqml.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#003049',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );

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
          <Stack.Screen
            component={ListNewsScreen}
            name="ListNewsScreen"
            options={{headerShown: false}}
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
