import React, {useState, useContext, useEffect} from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Context as AuthContext} from '../context/AuthContext';

const SignInScreen = ({navigation}) => {
  const {signin, tryLocalSignin} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        value={username}
        onChangeText={newUsername => setUsername(newUsername)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="white" />}
        containerStyle={styles.inputContainer}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`username: ${username} \npassword: ${password}`)}>
        <Text
          style={{color: 'white', fontFamily: 'Poppins-Black', fontSize: 16}}>
          Masuk
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: 'white',
          fontFamily: 'Poppins-Black',
          marginVertical: 10,
          fontSize: 16,
        }}>
        atau
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/google.png')} />
        <TouchableOpacity
          style={{...styles.button, marginLeft: 20}}
          onPress={signin}>
          <Text
            style={{color: 'white', fontFamily: 'Poppins-Black', fontSize: 16}}>
            Masuk pake gugle
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navLink}>
          Belom punya akun? Tekan sini buat daftar!
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
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
