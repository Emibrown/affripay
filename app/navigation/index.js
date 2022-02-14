import * as React from 'react'
import {
    StatusBar,
    ActivityIndicator,
    useColorScheme,
    Text
} from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme, } from '@react-navigation/native';
import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import {AuthNavigator,ReturningUserNavigator} from "./AuthNavigator"
import AppNavigator from './AppNavigator';
import { restoreApp } from '../stores/actionCreators';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator()

const Loading = (props) => {
    const appLoading = useSelector((state) => state.appLoading);
    React.useEffect(() => {
        if(!appLoading){
            props.navigation.navigate("AuthNavigator");
        }
    }, [appLoading]);

    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
            backgroundColor:"white"
        }}>
            <StatusBar 
            translucent ={true}
            backgroundColor="rgba(0,0,0,0)"
            barStyle="dark-content"
            showHideTransition="slide"
            />
            <ActivityIndicator size={80} color="#2752DA"/>
            <Text style={{textAlign:'center'}}>Please wait . . . </Text>
         </SafeAreaView>
    );
};


function Navigation(props) {
    const appLoading = useSelector((state) => state.appLoading);
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
        
            return <>
                <Stack.Screen 
                    name="AuthNavigator" 
                    component={AuthNavigator} 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name="ReturningUserNavigator" 
                    component={ReturningUserNavigator} 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name="AppNavigator" 
                    component={AppNavigator} 
                    options={{
                        headerShown:false
                    }}
                />
            </>
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack.Navigator
                initialRouteName='Loading'
                    screenOptions={{
                        ...TransitionPresets.SlideFromRightIOS
                    }}
                >
                    
                    <Stack.Screen 
                        name="Loading" 
                        component={Loading} 
                        options={{
                            headerShown:false
                        }}
                    />
                    {appState()}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
  
export default Navigation