import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appTheme} from '../theme/appTheme';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';
interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({title}) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginTop: 20 + top, marginBottom: 20}}>
      <Text style={{...appTheme.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
