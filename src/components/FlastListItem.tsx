import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlastListItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color="grey" />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <Icon
          name="chevron-forward-outline"
          size={23}
          color="grey"
          style={{justifyContent: 'flex-end'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
    flexGrow: 1,
  },
});
