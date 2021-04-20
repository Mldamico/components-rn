import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.purpleBlox} />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBlox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
