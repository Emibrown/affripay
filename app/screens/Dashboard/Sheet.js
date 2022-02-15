import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Transactions from './Transactions';
import Escrow from './Escrow';

const Sheet = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabBtnContainer}>
        <TouchableOpacity
          style={[
            {
              borderBottomWidth: 1.5,
              borderBottomColor: currentTab === 0 ? '#407BFF' : 'white',
            },
            styles.tabBtn
          ]}
          onPress={() => setCurrentTab(0)}>
          <Text
            style={[
              {
                color: currentTab === 0 ? '#4E5C80' : '#4E5C8070',
              },
              styles.tabText,
            ]}>
            Transactions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              borderBottomWidth: 1.5,
              borderBottomColor: currentTab === 1 ? '#407BFF' : 'white',
            },
            styles.tabBtn
          ]}
          onPress={() => setCurrentTab(1)}>
          <Text
            style={[
              {
                color: currentTab === 1 ? '#4E5C80' : '#4E5C8070',
              },
              styles.tabText,
            ]}>
            Escrow
          </Text>
        </TouchableOpacity>
      </View>
      {currentTab === 0 && <Transactions />}
      {currentTab === 1 && <Escrow />}
    </View>
  );
};

export default Sheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    borderRadius:20,
    flex: 1,
    paddingTop: 5,
    paddingHorizontal:20,
    width: '100%',
  },
  tabBtnContainer: {
    paddingTop:10,
    marginBottom:5,
    paddingHorizontal:20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabBtn: {
    paddingTop:"5%",
    textAlign: 'center',
    marginRight: 15,
  },
  tabText: {
    textAlign: 'center',
  },
  tabView: {
    width: '100%',
    backgroundColor: 'green',
  },
});
