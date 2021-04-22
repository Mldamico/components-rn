import React from 'react';
import {FlatList, View} from 'react-native';
import {FlastListItem} from '../components/FlastListItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {appTheme} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...appTheme.globalMargin}}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        data={menuItems}
        renderItem={({item}) => <FlastListItem menuItem={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
