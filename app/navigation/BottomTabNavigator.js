import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Image, View} from 'react-native';
import * as React from 'react';
import {
  Home,
  User,
  AddUser,
  Wallet,
  Activity,
  IconlyProvider,
  Search,
} from 'react-native-iconly';
import DashboardScreen from '../screens/Dashboard';
import ProfileScreen from '../screens/Profile';
import SettingScreen from '../screens/Settings';
import QRScanScreen from '../screens/QRScan';

import WalletScreen from '../screens/Wallet';
import CardScreen from '../screens/Card';
import Notification from '../screens/Settings/Notification';
import Security from '../screens/Settings/Security';

// import WalletSVG from '../assets/images/wallet.svg';
import WalletIcon from '../assets/svgIcons/WalletIcon';
import HomeIcon from '../assets/svgIcons/HomeIcon';
import ProfileIcon from '../assets/svgIcons/ProfileIcon';
import QRScannerImg from '../assets/images/QRScanner.png';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: '#F1F3FA',
        },
      }}>
        
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconlyProvider
              set="bulk"
              primaryColor={color}
              secondaryColor={color}
              stroke="bold"
              size="large">
              <Home />
            </IconlyProvider>
          ),
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconlyProvider
              set="bulk"
              primaryColor={color}
              secondaryColor={color}
              stroke="bold"
              size="large">
              <Wallet />
            </IconlyProvider>
          ),
          headerBackgroundContainerStyle: {
            backgroundColor: 'red',
          },
          // headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="QRScan"
        component={QRScanScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                padding: 15,
                backgroundColor: '#F1F3FA',
                marginBottom: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={QRScannerImg}
                resizeMode="contain"
                style={{width: 55, height: 55}}
              />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({color}) => <WalletIcon color={color} />,
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
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
