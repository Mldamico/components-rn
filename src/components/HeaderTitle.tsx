import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appTheme} from '../theme/appTheme';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({title}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: 20 + top, marginBottom: 20}}>
      <Text style={appTheme.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
