import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Paginator = ({data, scrollX}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const scale = scrollX.interpolate({
    inputRange: [(3 - 1) * width, (3 - 0.5) * width, 3 * width],
    outputRange: [0, 1.2, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={{...styles.container, width}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={{...styles.dot, width: dotWidth, height: dotWidth, opacity}}
            key={i.toString()}></Animated.View>
        );
      })}

      <TouchableOpacity
        style={{position: 'absolute', right: 30}}
        onPress={() => navigation.navigate('loginFlow', {screen: 'SignIn'})}>
        <Animated.Image
          source={require('./../../../assets/NextButton.png')}
          style={{width: 64, height: 64, transform: [{scale: scale}]}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f77f00',
    marginHorizontal: 8,
  },
});

export default Paginator;
