import React, {useContext} from 'react';
import {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/theme/ThemeContext';

export const TextInputScreen = () => {
  const {theme} = useContext(ThemeContext);
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   isSuscribe: false,
  // });

  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

  const {name, email, phone, isSuscribe} = form;

  // const onChange = (value: string, field: string) => {
  //   setForm({...form, [field]: value});
  // };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={appTheme.globalMargin}>
            <HeaderTitle title="Text input" />
            <TextInput
              style={{
                ...styles.textInputStyle,
                borderColor: theme.colors.text,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su nombre"
              onChangeText={value => onChange(value, 'name')}
              autoCorrect={false}
              autoCapitalize="words"
              placeholderTextColor={theme.dividerColor}
            />
            <TextInput
              style={{
                ...styles.textInputStyle,
                borderColor: theme.colors.text,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su email"
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              placeholderTextColor={theme.dividerColor}
            />
            <View style={styles.switchRow}>
              <Text style={{...styles.switchText, color: theme.colors.text}}>
                isSuscribe
              </Text>
              <CustomSwitch
                isOn={isSuscribe}
                onChange={value => onChange(value, 'isSuscribe')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={styles.textInputStyle}
              placeholder="Ingrese su telefono"
              keyboardType="phone-pad"
              onChangeText={value => onChange(value, 'phone')}
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});
