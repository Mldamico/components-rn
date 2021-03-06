import React, {useContext} from 'react';
import {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  // const {top} = useSafeAreaInsets();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola');
    }, 3500);
  };

  return (
    <ScrollView
      // style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.background}
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: colors.background}}
          tintColor={dark ? 'white' : 'black'}
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={appTheme.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
