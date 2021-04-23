import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View, Modal} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

export const ModalScreen = () => {
  const [modal, setModal] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const openModal = () => {
    setModal(true);
  };
  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title={'Modals'} />
      <Button title="Abrir modal" onPress={openModal} />
      <Modal visible={modal} animationType="fade" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderColor: colors.border,
              borderWidth: 1,
              backgroundColor: colors.background,
              width: 300,
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <HeaderTitle title="Modal" />
            <Text style={{marginBottom: 20}}>Cuerpo de modal</Text>
            <Button title="Cerrar modal" onPress={() => setModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});
