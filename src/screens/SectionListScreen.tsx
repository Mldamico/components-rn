import React, {useContext} from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';
import {casas} from '../data/sectionListData';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/theme/ThemeContext';

export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...appTheme.globalMargin, flex: 1}}>
      <SafeAreaView>
        <SectionList
          sections={casas}
          ListHeaderComponent={() => <HeaderTitle title="Section List" />}
          ListFooterComponent={() => (
            <View style={{marginBottom: 50}}>
              <HeaderTitle title={`Total de casas ${casas.length}`} />
            </View>
          )}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Text style={{color: colors.text}}>{item}</Text>
          )}
          stickySectionHeadersEnabled
          renderSectionHeader={({section: {casa}}) => (
            <View style={{backgroundColor: colors.background}}>
              <HeaderTitle title={casa} />
            </View>
          )}
          renderSectionFooter={({section}) => (
            <HeaderTitle title={`Total : ${section.data.length}`} />
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});
