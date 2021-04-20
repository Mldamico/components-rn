import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated, Button, Easing} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, startMoving, fadeIn, fadeOut} = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBlox,
          opacity: opacity,
          marginBottom: 20,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <View style={{marginBottom: 20}}>
        <Button
          title="Fade In"
          onPress={() => {
            fadeIn();
            startMoving(100, 700);
          }}
        />
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
