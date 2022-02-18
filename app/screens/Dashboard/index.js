import React, {useRef, useMemo, useCallback} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import AssetCard from './AssetCard';
import Contacts from './Contacts';
import SpecialOffer from './SpecialOffer';
import BottomSheet from '@gorhom/bottom-sheet';
import Sheet from './Sheet';
import TopMenu from './TopMenu';
import VirtualizedView from '../../components/VirtualizedView';
import {SafeAreaView,useSafeAreaInsets} from 'react-native-safe-area-context';


const Dashboard = () => {
  const bottomSheetRef = useRef(null);
  const insets = useSafeAreaInsets();


  // variables
  const snapPoints = useMemo(() => ['1%', '48%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={[styles.container,{paddingTop:insets.top,}]}>
      <StatusBar 
        translucent ={true}
        backgroundColor="rgba(0,0,0,0)"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <VirtualizedView>
        <TopMenu />
        <AssetCard />
        <Contacts title={'Contacts'} />
        <SpecialOffer />
        <Sheet />
      </VirtualizedView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:"#F1F3FA"
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
