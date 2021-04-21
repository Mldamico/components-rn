import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Text input" />
      <TextInput style={styles.textInputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
});
