import React, {useState, useEffect} from 'react';
import Login from '../screens/Login/Login';
import EnterLoginPin from '../screens/Login/EnterLoginPin';
import SignupOtp from '../screens/SignUp/SignupOtp';
import SignupPin from '../screens/SignUp/SignupPin';
import ConfirmPin from '../screens/SignUp/ConfirmPin';
import Signup from '../screens/SignUp/Signup';
import SignUpSuccess from '../screens/SignUp/SignUpSuccess';
import ReturningUser from '../screens/ReturningUser/Index';
import ReturningUserPin from '../screens/ReturningUser/Pin';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import { useDispatch, useSelector } from 'react-redux';


const AuthStack = createStackNavigator();


export const AuthNavigator = () => {
  const state = useSelector((state) => state.AppState);


  return (
    <AuthStack.Navigator 
      initialRouteName={state.authInitialScreen}
      screenOptions={{
          ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      {/* signup screens */}
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignupOtp"
        component={SignupOtp}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignupPin"
        component={SignupPin}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ConfirmPin"
        component={ConfirmPin}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={{
          headerShown: false,
        }}
      />
      {/* signup screens ends */}

      {/* login screens */}

      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="EnterLoginPin"
        component={EnterLoginPin}
        options={{
          headerShown: false,
        }}
      />
      {/* login screens end */}
    </AuthStack.Navigator>
  );
};

export const ReturningUserNavigator = () => {

  return (
    <AuthStack.Navigator 
      initialRouteName="ReturningUser"
      screenOptions={{
          ...TransitionPresets.SlideFromRightIOS
      }}
    >

      {/* Returning user */}
      <AuthStack.Screen
        name="ReturningUser"
        component={ReturningUser}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="ReturningUserPin"
        component={EnterLoginPin}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      {/* Returning user end */}
    </AuthStack.Navigator>
  );
};

