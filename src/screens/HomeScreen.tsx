import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';
import {appTheme} from '../theme/appTheme';
import {FlastListItem} from '../components/FlastListItem';

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {};

  const renderListHeader = () => {
    const {top} = useSafeAreaInsets();
    return (
      <View style={{marginTop: 20 + top, marginBottom: 20}}>
        <Text style={appTheme.title}>Opciones de menu</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={appTheme.listSeparator}></View>;
  };
  return (
    <View style={{flex: 1, ...appTheme.globalMargin}}>
      <FlatList
        ListHeaderComponent={renderListHeader}
        data={menuItems}
        renderItem={({item}) => <FlastListItem menuItem={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
