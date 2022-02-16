import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import DashboardScreen from '../screens/Dashboard';
import ProfileScreen from '../screens/Profile';

import WalletScreen from '../screens/Wallet';
import CardScreen from '../screens/Card';
import TabBar from './TabBar';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBar={props => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Card"
        component={CardScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="QRScan"
        component={CardScreen}
        options={{

        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  qrContainer: {
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: 'F1F3FA',
    padding: 8,
  },
});
