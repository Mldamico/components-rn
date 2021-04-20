import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBlox, opacity: opacity}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBlox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
