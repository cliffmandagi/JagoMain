import React, {useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

const AccountScreen = () => {
  const {
    state: {user},
    signout,
  } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: user.photoURL}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#f77f00',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 12,
        }}
        onPress={signout}>
        <Text h4 style={{color: 'white'}}>
          SignOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002437',
  },
});

export default AccountScreen;
