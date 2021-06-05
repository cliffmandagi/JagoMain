import React, {useRef} from 'react';
import {View, StyleSheet, FlatList, Animated} from 'react-native';
import carouselData from './carouselData';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={carouselData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true} // snaps the element into place.
          bounces={false} // set the overflowing swipe to false.
          renderItem={({item, index}) => {
            return (
              <OnboardingItem item={item} scrollX={scrollX} index={index} />
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          ref={slidesRef}
          scrollEventThrottle={32}
        />
      </View>
      <Paginator data={carouselData} scrollX={scrollX} />
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
});

export default Onboarding;
