import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../constants/index';
import Logo from '../../assets/images/logo.png';
import Create from '../../assets/images/create.svg';
import User from '../../assets/images/user.png';
import More from '../../assets/images/More.svg';
import { logoutUser } from '../../stores/actionCreators';
import GradientText from '../../constants/gradientText';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux'
import {Avatar} from '@ui-kitten/components';
// import { LinearGradient } from 'expo-linear-gradient';



export default function Index({navigation, route}) {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.AppState.user);




  const onPressLogin = () => {
    dispatch(logoutUser("Login"))
  };

  const onPressSignUp = () => {
    dispatch(logoutUser("Signup"))
  };

  const onPressEnterPin = () => {
    navigation.navigate('ReturningUserPin', {
      phone: user.phone,
    });
  };

  useEffect(() => {
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.inner}>
        <View style={styles.topContain}>
          <Image style={styles.logo} source={Logo} />

          {/* <Text style={styles.phoneNumber}>{realPhoneNumber}</Text> */}
        </View>

        {user ? (
          <View>
            <TouchableOpacity
              onPress={onPressEnterPin}
              style={styles.loggedInUser}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                  source={User}
                  size="giant"
                  ImageComponent={ImageBackground}
                />
                <Text style={styles.loggedInUserName}>{user?.name}</Text>
              </View>
              <More />
            </TouchableOpacity>
          </View>
        ) : 
        null
        }

        <TouchableOpacity
          onPress={onPressSignUp}
          style={styles.createNewContainer}>
          <Create />
          <Text style={styles.createText}>Create New Account</Text>
        </TouchableOpacity>

        <View style={styles.topButtonContain}>
          <Button
            text="Sign in with another account"
            type="filled"
            bordered
            size="large"
            onPress={onPressLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  inner: {
    flex: 1,

    backgroundColor: '#fff',
  },

  input: {
    backgroundColor: 'red',
    padding: SIZES.base * 1,
    backgroundColor: '#F1F3FA',
    borderRadius: SIZES.base * 1,
  },
  //   style for inputText
  inputText: {
    fontSize: SIZES.base * 2,
    color: COLORS.appPrimary,
    fontWeight: 'bold',
    marginRight: SIZES.base * 2,
    backgroundColor: '#F1F3FA',
    padding: SIZES.base * 1,
    borderRadius: SIZES.base * 1,
  },

  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.appPrimary,
  },

  text: {
    color: '#4E5C80',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
  },

  topContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"10%"
  },

  createNewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },

  createText: {
    fontSize: 16,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.dark_1,
  },

  loggedInUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
  },

  loggedInUserName: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.dark_2_0,
    marginLeft: 17,
  },

  topButtonContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
});
