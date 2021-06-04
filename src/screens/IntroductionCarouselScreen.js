import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Onboarding from '../components/carouselComponents/Onboarding';

const IntroductionCarouselScreen = () => {
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
