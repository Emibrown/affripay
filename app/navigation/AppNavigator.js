import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import NavScreens from './screens';

const AppStack = createStackNavigator();

const AppNavigator = () => {

  return (
    <AppStack.Navigator 
      initialRouteName="Main"
      screenOptions={{
          ...TransitionPresets.SlideFromRightIOS
      }}
    >
      {
        NavScreens.map((sc, i)=> <AppStack.Screen
          key={i}
          name={sc.name}
          component={sc.component}
          options={sc.options}
        />)
      }
    </AppStack.Navigator>
  );
};

export default AppNavigator;