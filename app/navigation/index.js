import * as React from 'react'
 import {
     StatusBar,
     useColorScheme
 } from 'react-native';
 import { NavigationContainer,DefaultTheme,DarkTheme, } from '@react-navigation/native';
 import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
 import SplashScreen from 'react-native-splash-screen'
 import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
 import { useDispatch, useSelector } from 'react-redux';
 import { restoreApp } from '../stores/actionCreators';
 import {AuthNavigator,ReturningUserNavigator} from "./AuthNavigator" 
 import AppNavigator from './AppNavigator';


 const Stack = createStackNavigator()

 const Loading = () => {
     return (
         <SafeAreaView style={{
             flex:1,
             backgroundColor:"white"
         }}>
             <StatusBar 
             barStyle="dark-content"
             showHideTransition="slide"
             />
          </SafeAreaView>
     );
 };


export default function Navigation() {
     const state = useSelector((state) => state);
     const dispatch = useDispatch();
     const scheme = useColorScheme();

     React.useEffect(() => {
         init()
     }, []);

     const init = async () => {
         await dispatch(restoreApp())
         SplashScreen.hide()
     }

     const appState = () => {
         switch (state.appState) {
         case 0:
             return <Stack.Screen 
                 name="AuthNavigator" 
                 component={AuthNavigator} 
                 options={{
                     headerShown:false
                 }}
             />
         case 1:
             return <Stack.Screen 
                 name="ReturningUserNavigator" 
                 component={ReturningUserNavigator} 
                 options={{
                     headerShown:false
                 }}
             />;
         case 2:
             return <Stack.Screen 
                 name="AppNavigator" 
                 component={AppNavigator} 
                 options={{
                     headerShown:false
                 }}
             />;
         default:
             return null;
         }
     }

     return (
         <SafeAreaProvider>
             <NavigationContainer>
                 <Stack.Navigator
                     screenOptions={{
                         ...TransitionPresets.SlideFromRightIOS
                     }}
                 >
                     {
                         state.appLoading?(
                             <Stack.Screen 
                                 name="Loading" 
                                 component={Loading} 
                                 options={{
                                     headerShown:false
                                 }}
                             />
                         ):appState()
                     }
                 </Stack.Navigator>
             </NavigationContainer>
         </SafeAreaProvider>
     )
}