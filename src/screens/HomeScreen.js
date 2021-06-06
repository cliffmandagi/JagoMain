import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {state} = useContext(AuthContext);
  const {user} = state;
  return (
    <View style={styles.container}>
      <Text h2>Hi {user.givenName}</Text>
      <Image
        source={{uri: user.photo}}
        style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
