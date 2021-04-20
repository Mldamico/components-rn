import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {appTheme} from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

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
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - <Icon name={menuItem.icon} size={30} />
        </Text>
      </View>
    );
  };

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
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
