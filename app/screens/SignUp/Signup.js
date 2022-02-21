import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  ActivityIndicator
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
import CountriesUI from '../../components/Countries'
import { Countries } from '../../data/countries';
import { StartSignup } from '../../stores/actions/signup.action'

const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function SignUp({navigation, route}) {
  const dispatch = useDispatch()

  const [activeChecked, setActiveChecked] = React.useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("")
  const [selectedCountry, setSelectedCountry] = React.useState(Countries.find((c)=>c.dialCode=="+234"));
  const [showCountriesUI, setShowCountriesUI] = React.useState(false)
  
  const isRequesting = useSelector(state=>state.Signup.isRequesting);
  const [currentRequestStatus, setCurrentRequestStatus] = useState(isRequesting)
  const signupError = useSelector(state=>state.Signup.signupError);


  const onSelectCountry = (countryObj)=>{
    setShowCountriesUI(false);
    setSelectedCountry(countryObj)
  }

  const shouldContinue = ()=>{
    return username.length > 1 && phone.length > 5 && activeChecked  && !isRequesting;
  }

  const onSignUp = ()=>{
    const data = {
      phone: selectedCountry.dialCode+phone,
      name: username
    }
    dispatch(StartSignup(data))
  }

  useEffect(()=>{
    if(currentRequestStatus && !isRequesting){
      navigation.navigate("SignupOtp")
    }
    setCurrentRequestStatus(isRequesting)
  }, [isRequesting])

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
              onChangeText={(text)=>setUsername(text)}
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
              keyboardType="phone-pad"
              maxLength={11}
              onChangeText={(phone)=>setPhone(phone)}
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
                  }} onPress={()=>setShowCountriesUI(true)}>
                    <Text style={{
                      color:"#182D64",
                      fontWeight:"bold",
                      fontSize:moderateScale(14)
                    }}>
                      {selectedCountry.dialCode}
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
          {isRequesting && <View style={{paddingVertical:30}}>
            <ActivityIndicator size={30}/>
          </View>}
          <View>
            <Button 
              text="Sign Up"
              bordered
              isDisabled ={!shouldContinue()}
              onPress={onSignUp}
            />
          </View>
         
        </View>
      </ScrollView>
      <Modal 
        visible={showCountriesUI} 
        transparent={true} 
        animated={true}
        onRequestClose={()=>setShowCountriesUI(false)}
        animationType="slide">

          <View style={[styles.modalContainer]}>
            <View style={[styles.modalContent]}>
              <CountriesUI onSelect={onSelectCountry}/>
            </View>
          </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
    paddingHorizontal:10
  },
  modalContent:{
    height:700,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    maxHeight:'60%',
    backgroundColor:'#f1f1f1',
    elevation:6,
    borderTopWidth:5, 
    borderTopColor:'blue'
  },
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
