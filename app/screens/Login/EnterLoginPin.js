import React, {useState,useEffect} from 'react';
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
import PinInput from '../../components/PinInput';
import { failureMessage } from '../../helpers/helperFunctions';
import { StartLogin } from '../../stores/actions/login.action';
import { useDispatch, useSelector } from 'react-redux'



const { width, height } = Dimensions.get('window');
const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function SignupPin({navigation, route}) {
  const {phone} = route.params
  const [pin,setPin] = useState('')
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  const isRequesting = useSelector(state=>state.Login.isRequesting);



  useEffect(()=>{
    setLoading(isRequesting)
  },[isRequesting])

  const onSubmit = async () => {
    if(pin.length == 4){
      const data = {
        phone,
        pin
      }
      dispatch(StartLogin(data))
    }
  }

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
            marginTop:"7%",
            alignItems:"center"
          }}>
            <Text style={styles.text}>Please enter your unique PIN for</Text>
            <Text style={styles.subText}>{phone}</Text>
          </View>
        </View>

        <View style={styles.form}>

          <View style={styles.inputContainer}>
            <PinInput onChange={(value)=>setPin(value)} />
          </View>
          <View>
            <Button 
              text="Continue"
              bordered
              Loading={loading}
              isDisabled={pin.length != 4}
              onPress={onSubmit}
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
    color:"rgba(38, 38, 38, 0.6)",
  },
  subText:{
    fontWeight:"500",
    marginTop:"1%",
    fontSize:moderateScale(16),
    color:"rgba(38, 38, 38, 0.6)",
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
