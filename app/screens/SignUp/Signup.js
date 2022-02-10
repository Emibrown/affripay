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
const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function SignUp({navigation, route}) {


  const [activeChecked, setActiveChecked] = React.useState(true);
  

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <Header />
      <ScrollView style={{paddingHorizontal:"7%"}}>

        <View style={styles.topContain}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.text}>Create your account</Text>
        </View>

        <View style={styles.form}>

          <View style={styles.inputContainer}>
            <CustomTextInput 
              placeholder="User Name"
              left={()=>(
                <IconlyProvider
                  primaryColor="#959FBA"
                >
                  <User />
                </IconlyProvider>
              )}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomTextInput 
              placeholder="Phone Number"
              keyboardType="numeric"
              left={()=>(
                <View style={{
                  flexDirection:"row",
                  borderRightWidth:2,
                  borderRightColor:"#D3D8E8",
                  alignItems:"center",
                }}>
                  <IconlyProvider
                    primaryColor="#959FBA"
                  >
                    <Call />
                  </IconlyProvider>
                  <TouchableOpacity style={{
                    marginHorizontal:moderateScale(14)
                  }}>
                    <Text style={{
                      color:"#182D64",
                      fontWeight:"bold",
                      fontSize:moderateScale(14)
                    }}>
                    +61
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={{
            marginBottom:"8%",
          }}>
            <Radio
              style={styles.radio}
              checked={activeChecked}
              onChange={nextChecked => setActiveChecked(nextChecked)}>
              <Text style={styles.radioText}>Agree to <Text style={styles.hightlightText}>Terms of Service</Text> and <Text style={styles.hightlightText}>Terms of Use</Text></Text>
            </Radio>
          </View>
          <View>
            <Button 
              text="Sign Up"
              bordered
              onPress={()=>navigation.navigate("SignupOtp")}
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
  form:{
    marginTop:"5%"
  },
  text:{
    fontWeight:"500",
    fontSize:moderateScale(16),
    color:"#4E5C80",
    marginVertical:"5%",
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
