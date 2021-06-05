import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Onboarding from '../components/carouselComponents/Onboarding';
import {Context as AuthContext} from '../context/AuthContext';

const IntroductionCarouselScreen = () => {
  const {state, checkFirstTime} = useContext(AuthContext);
  useEffect(() => {
    checkFirstTime();
  }, []);

  if (!state.firstTime) return <View style={styles.container}></View>;

  return (
    <View style={styles.container}>
      <StatusBar />
      <Onboarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003049',
  },
});

export default IntroductionCarouselScreen;
