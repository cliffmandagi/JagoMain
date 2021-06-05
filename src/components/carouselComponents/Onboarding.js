import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList, Animated} from 'react-native';
import carouselData from './carouselData';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

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
          renderItem={({item}) => {
            return <OnboardingItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
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
