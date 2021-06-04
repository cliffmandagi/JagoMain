import React from 'react';
import {View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-elements';

const OnboardingItem = ({item}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{...styles.container, width: width, height: height}}>
      <Image
        source={item.image}
        style={{...styles.image, width: width / 1.5}}
      />
      <View style={{flex: 0.4}}>
        <Text h3 style={styles.title}>
          {item.title}
        </Text>
        <Text h5 style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  image: {
    resizeMode: 'contain',
    flex: 0.6,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 64,
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingItem;
