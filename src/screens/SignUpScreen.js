import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Input
        placeholder="Username"
        leftIcon={<Icon name="person" size={24} color="white" />}
        containerStyle={styles.inputContainer}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="white" />}
        containerStyle={styles.inputContainer}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="white" />}
        containerStyle={styles.inputContainer}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Daftar Pressed')}>
        <Text
          style={{color: 'white', fontFamily: 'Poppins-Black', fontSize: 16}}>
          Daftar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.navLink}>
          Udah punya akun? Tekan sini buat masuk!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003049',
  },
  logo: {
    height: 215,
    width: 195,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  inputContainer: {paddingHorizontal: 50},
  input: {color: 'white', fontFamily: 'Poppins-Regular'},
  button: {
    backgroundColor: '#ff7f00',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: 'black',
    elevation: 6,
  },
  navLink: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
