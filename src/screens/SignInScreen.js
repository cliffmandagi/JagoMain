import React, {useState, useContext, useEffect} from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Context as AuthContext} from '../context/AuthContext';

const SignInScreen = ({navigation}) => {
  const {
    state: {loading, errorMessage},
    signInWithGoogle,
    signInWithEmail,
    setErrorMsg,
  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setErrorMsg('');
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Input
        placeholder="email"
        leftIcon={<Icon name="person" size={24} color="white" />}
        containerStyle={styles.inputContainer}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={email => setEmail(email)}
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
      {errorMessage ? (
        <Text h5 style={{color: 'red', marginBottom: 25}}>
          {errorMessage}
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!email || !password) {
            setErrorMsg('Form gaboleh kosong');
            return;
          }
          signInWithEmail(email, password);
        }}>
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
          onPress={signInWithGoogle}>
          <Text
            style={{color: 'white', fontFamily: 'Poppins-Black', fontSize: 16}}>
            Masuk pake gugle
          </Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={true}
          style={{marginLeft: 20, opacity: loading ? 1 : 0}}
          color="white"
        />
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
