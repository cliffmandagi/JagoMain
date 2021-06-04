import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Image, Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({navigation}) => {
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
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="white" />}
        containerStyle={{paddingHorizontal: 50}}
        style={{color: 'white'}}
      />
      
      <Button
        title="Daftar"
        buttonStyle={{ backgroundColor: '#F77F00', width: 110, height: 40, borderRadius: 10, marginTop: 5 }}
        titleStyle={{ fontFamily: 'Poppins-Black' }}
        onPress={() => alert('Daftar Pressed!')}
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Regular', marginTop: 30, textDecorationLine: 'underline' }}>Udah punya akun? Klik sini buat masuk!</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignUpScreen;
