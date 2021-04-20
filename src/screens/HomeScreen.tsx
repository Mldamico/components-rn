import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import {appTheme} from '../theme/appTheme';
import {FlastListItem} from '../components/FlastListItem';
import {menuItems} from '../data/menuItems';

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
