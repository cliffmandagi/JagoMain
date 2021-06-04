import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Image, Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SignInScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003049',
      }}>

      <Image
        source={require('../../assets/logo.png')}
        style={{height: 215, width: 195, marginBottom: 15}}
      />

      <Input
        placeholder="Username"
        leftIcon={<Icon name="person" size={24} color="white" />}
        containerStyle={{paddingHorizontal: 50}}
        style={{color: 'white'}}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="white" />}
        containerStyle={{paddingHorizontal: 50}}
        style={{color: 'white'}}
      />
      
      <Button
        title="Masuk"
        buttonStyle={{ backgroundColor: '#F77F00', width: 110, height: 40, borderRadius: 10, marginTop: 5 }}
        titleStyle={{ fontFamily: 'Poppins-Black' }}
        onPress={() => alert('Masuk Pressed!')}
      />

      <Text style={{color: 'white', fontFamily: 'Poppins-Black', marginVertical: 10, fontSize: 16 }}>atau</Text>

      <Button
        icon={
          <Image
            source={require('../../assets/google.png')}
            style={{height: 25, width: 25}}
          />
        }
        iconLeft
        title="Masuk pake gugle"
        buttonStyle={{ backgroundColor: '#F77F00', height: 40, borderRadius: 10 }}
        titleStyle={{ fontFamily: 'Poppins-Black', marginHorizontal: 20 }}
        onPress={() => alert('Masuk with Google Pressed!')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Regular', marginTop: 30, textDecorationLine: 'underline' }}>Belom punya akun? Klik sini buat daftar!</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignInScreen;
