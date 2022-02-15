import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { switchToDashboard } from '../../stores/actionCreators'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView } from 'react-native-safe-area-context';
import {
  IconlyProvider,
  Home,
  Notification,
  User,
  ArrowLeft,
  ChevronLeft,
  Call,
  Phone,
} from 'react-native-iconly';
import Logo from '../../assets/images/logo.png';
import img from '../../assets/images/successGb.png';
import Button from '../../components/Button';
import PswIcon from '../../assets/images/PasswordIcon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { moderateScale } from 'react-native-size-matters';
import CustomTextInput from '../../components/CustomTextInput';
import {Radio} from '@ui-kitten/components';
import Header from '../../components/Header';
import PinInput from '../../components/PinInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../../stores/actionCreators';

const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function SignupPin({navigation, route}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <View style={{
        flex:1,
        justifyContent:"space-between",
        paddingHorizontal:"7%",
        paddingVertical:"8%"
      }}>

        <View style={styles.topContain}>
          <Image style={styles.logo} source={Logo} />
        </View>


        <View style={styles.inputContainer}>
          <Image style={styles.img} source={img}  resizeMode="contain"/>
          <Text  style={{
            color:"#182D64",
            fontWeight:'bold',
            fontSize:moderateScale(24)
          }}>
          Thank you
          </Text>
          <Text style={{
            color:"#959FBA",
            fontSize:moderateScale(14),
            fontWeight:'500',
            marginTop:"2%"
          }}>
          You have successfully signup
          </Text>
        </View>

        <View>
          <Button 
            text="Let’s go"
            bordered
            onPress={()=>dispatch(changeState())}

          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingVertical:'3%',
    marginHorizontal:"3%"
  },
  logo:{
    width:per_height(6),
    height:per_height(6),
  },
  img:{
    width:per_height(25),
    height:per_height(25),
  },
  topContain:{
    alignItems:"center"
  },
  form:{
    marginTop:"5%"
  },
  text:{
    fontWeight:"500",
    fontSize:moderateScale(16),
    color:"rgba(38, 38, 38, 0.6)",
  },
  subText:{
    fontWeight:"500",
    marginTop:"1%",
    fontSize:moderateScale(16),
    color:"rgba(38, 38, 38, 0.6)",
  },
  inputContainer:{
    alignItems:"center",
    marginTop:"-40%"
  },
  radio: {
  },
  hightlightText: {
    color: '#4A5AFF',
  },
  radioText:{
    fontSize:moderateScale(12),
    fontWeight:"normal"
  },
  code:{
    borderRightWidth:1,
    paddingHorizontal:"5%",
    justifyContent:"center",
    alignItems:"center"
  },
});
