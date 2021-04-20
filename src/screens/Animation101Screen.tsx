import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated, Button} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.purpleBlox, opacity: opacity, marginBottom: 20}}
      />
      <View style={{marginBottom: 20}}>
        <Button title="Fade In" onPress={fadeIn} />
      </View>

      <Button title="Fade Out" onPress={fadeOut} />
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
