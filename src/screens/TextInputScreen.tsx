import React from 'react';
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

export const TextInputScreen = () => {
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
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>isSuscribe</Text>
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
    borderColor: 'rgba(0,0,0,0.3)',
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
