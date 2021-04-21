import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({...form, [field]: value});
  };
  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Text input" />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Ingrese su nombre"
        onChangeText={value => onChange(value, 'name')}
        autoCorrect={false}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Ingrese su email"
        autoCapitalize="none"
        onChangeText={value => onChange(value, 'email')}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Ingrese su telefono"
        keyboardType="phone-pad"
        onChangeText={value => onChange(value, 'phone')}
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
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
    marginVertical: 10,
  },
});
