import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {state, changeUserName, changePassword} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>{state.username}</Text>
      <Input
        placeholder="Tes Context"
        onChangeText={newName => changeUserName(newName)}
      />
      <Text>{state.password}</Text>
      <Input
        placeholder="Tes Context"
        onChangeText={newPassword => changePassword(newPassword)}
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
