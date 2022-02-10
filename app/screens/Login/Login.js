import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView
} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView } from 'react-native-safe-area-context';
import GradientText from '../../constants/gradientText';
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
import PinInput from '../../components/PinInput';
import { primaryColor } from '../../style/color';
const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function Login({navigation, route}) {
  

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <Header />
      <ScrollView style={{paddingHorizontal:"7%"}}>

        <View style={styles.topContain}>
          <Image style={styles.logo} source={Logo} />
          <View style={{
            marginTop:"10%",
            alignItems:"center"
          }}>
            <GradientText style={styles.welcomeText}>
              Welcome to AfrirPay
            </GradientText>
            <Text style={styles.subText}>Please enter your mobile number</Text>
          </View>
        </View>

        <View style={styles.form}>

          <View style={styles.inputContainer}>
            <View style={{
              flexDirection:"row",
            }}>
              <View style={{
                backgroundColor:"#F1F3FA",
                paddingHorizontal:"4%",
                paddingVertical:"2%",
                borderRadius:10
              }}>
                <Text style={styles.label}>
                  ID
                </Text>
                <TouchableOpacity style={{
                  flex:1,
                  justifyContent:"center"
                }}>
                  <Text style={styles.callCode}>
                    +234
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{
                flex:1,
                backgroundColor:"#F1F3FA",
                marginLeft:"2%",
                paddingHorizontal:"4%",
                paddingVertical:"2%",
                borderRadius:10
              }}>
                <Text style={styles.label}>
                Phone Number
                </Text>
                <TextInput 
                  style={{
                    flex:1,
                    paddingVertical:0,
                    paddingLeft:0,
                    marginVertical:0,
                    color:"#0A0A0A",
                    fontSize:moderateScale(14),
                    fontWeight:'500'
                  }}
                  
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

        
          <View>
            <Button 
              text="Continue"
              bordered
              onPress={()=>navigation.navigate("EnterLoginPin")}
            />
          </View>
         
        </View>
      </ScrollView>
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
  topContain:{
    alignItems:"center"
  },
  callCode:{
    color:"#0A0A0A",
    fontWeight:"500",
    fontSize:moderateScale(14)
  },
  form:{
    marginTop:"20%"
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
    color:"#4E5C80",
  },
  inputContainer:{
    marginBottom:"8%"
  },
  label:{
    color:"#757575",
    fontSize:moderateScale(12),
    fontWeight:"normal"
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
  welcomeText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
    color: primaryColor,
  },
});
