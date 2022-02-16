import * as React from 'react';
import {Image, View,TouchableOpacity} from 'react-native';

import WalletIcon from '../assets/svgIcons/WalletIcon';
import ProfileIcon from '../assets/svgIcons/ProfileIcon';
import QRScannerImg from '../assets/images/QRScanner.png';
import {
    Home,
    Wallet,
    IconlyProvider,
} from 'react-native-iconly';


export default function TabBar({ state, descriptors, navigation }) {

    return (

        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
        
                return (
                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            { 
                            flex: 1,
                            alignItems:"center",
                            justifyContent:"center",
                            height:70,
                            backgroundColor:"white",
                            paddingBottom:10
                            },
                        ]}
                    >
                        <IconlyProvider
                            set="bulk"
                            primaryColor={isFocused ? '#125FD2' : '#B2B9CE'}
                            secondaryColor={isFocused ? '#125FD2' : '#B2B9CE'}
                            stroke="bold"
                            size="large"
                        >
                            {label=="Dashboard"&&<Home />}
                            {label=="Card"&&<Wallet />}
                            {label=="QRScan"&& <Image
                            source={QRScannerImg}
                            resizeMode="contain"
                            style={{ width: 55, height: 55, marginBottom:30}}
                            />}
                            {label=="Wallet"&&<WalletIcon color={isFocused ? '#125FD2' : '#B2B9CE'} />}
                            {label=="Profile"&&<ProfileIcon color={isFocused ? '#125FD2' : '#B2B9CE'} />}
                        </IconlyProvider>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
  }