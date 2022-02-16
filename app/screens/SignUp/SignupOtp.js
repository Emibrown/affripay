import React, {useState} from 'react';
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
import Button from '../../components/Button';
import PswIcon from '../../assets/images/PasswordIcon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { moderateScale } from 'react-native-size-matters';
import CustomTextInput from '../../components/CustomTextInput';
import {Radio} from '@ui-kitten/components';
import Header from '../../components/Header';
import OtpInput from '../../components/OtpInput';
const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function SignupOtp({navigation, route}) {
  

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <Header title="OTP Code" />
      <ScrollView style={{paddingHorizontal:"7%"}}>

        <View style={styles.topContain}>
          <Text style={styles.text}>We’ll text your OTP code</Text>
        </View>

        <View style={styles.form}>

          <View style={styles.inputContainer}>
            <OtpInput />
          </View>

          <View style={{
            marginHorizontal:"25%"
          }}>
            <Button 
              text="Confirm"
              bordered
              onPress={()=>navigation.navigate("SignupPin")}
            />
          </View>

          <View style={{
            alignItems:"center",
            marginTop:"5%"
          }}>
            <Text style={{
              color:"#FE6A92",
              fontSize:moderateScale(14),
              fontWeight:"normal"
            }}>
            Didn’t receive SMS
            </Text>

            <Text style={{
              fontWeight:"500",
              fontSize:moderateScale(14),
              color:"rgba(0, 0, 0, 0.7)",
              marginTop:"2%"
            }}>
            Resend Code in <Text style={{color:"rgba(99, 47, 201, 0.7)"}}>(00:59)</Text>
            </Text>

          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:per_height(6),
    height:per_height(6),
  },
  topContain:{
    alignItems:"center",
    marginTop:"10%"
  },
  form:{
    marginTop:"2%"
  },
  text:{
    fontWeight:"500",
    fontSize:moderateScale(16),
    color:"#4E5C80",
    // marginVertical:"2%",
  },
  inputContainer:{
    marginBottom:"8%"
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
