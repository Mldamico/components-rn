import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        ...appTheme.listSeparator,
        borderBottomColor: theme.dividerColor,
      }}></View>
  );
};

const styles = StyleSheet.create({});
