import React, {useContext, useRef} from 'react';
import {StyleSheet, Text, View, Animated, Button, Easing} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {opacity, position, startMoving, fadeIn, fadeOut} = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBlox,
          opacity: opacity,
          marginBottom: 20,
          backgroundColor: colors.primary,
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
          color={colors.primary}
        />
      </View>

      <Button color={colors.primary} title="Fade Out" onPress={fadeOut} />
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
    width: 150,
    height: 150,
  },
});
