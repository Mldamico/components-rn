import React from 'react';
import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

export const ThemeScreen = () => {
  const {
    theme: {colors},
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);
  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Themes" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLightTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            borderRadius: 20,
            height: 50,
            width: 150,
          }}>
          <Text style={{color: colors.text, textAlign: 'center', fontSize: 22}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            borderRadius: 20,
            height: 50,
            width: 150,
          }}>
          <Text style={{color: colors.text, textAlign: 'center', fontSize: 22}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
