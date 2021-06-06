import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {state} = useContext(AuthContext);
  const {user} = state;
  return (
    <View style={{flex: 1, backgroundColor: '#002437'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          placement="left"
          centerComponent={{
            text: 'Jagomain',
            style: {color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 18},
          }}
          backgroundColor="#003049"
          containerStyle={{borderBottomColor: '#002437'}}
        />

        <View style={{flexDirection: 'row'}}>
          {/* <Image source={require('../../assets/fire.png')}/> */}
          <Text
            style={{color: 'white', fontFamily: 'Poppins-Black', fontSize: 18}}>
            TEST
          </Text>
        </View>

        <Divider style={{backgroundColor: '#00283C', marginHorizontal: 20}} />
      </ScrollView>
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
