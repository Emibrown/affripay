import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Modal,
  ScrollView
} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView } from 'react-native-safe-area-context';
import GradientText from '../../constants/gradientText';
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
import CountriesUI from '../../components/Countries';
import { Countries } from '../../data/countries';
import { getDeviceCountry } from '../../helpers/helperFunctions';
import DeviceCountry, {
  TYPE_ANY,
} from 'react-native-device-country';
import { loginSchema } from '../../helpers/validations';



const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



export default function Login({navigation, route}) {
  const [showCountriesUI, setShowCountriesUI] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(Countries.find((c)=>c.code=="DZ"));
  const [loading, setLoading] = useState(false);



  const onSelectCountry = (countryObj)=>{
    setShowCountriesUI(false);
    setSelectedCountry(countryObj)
  }

  const onSubmit = (values)=>{
    navigation.navigate("EnterLoginPin",{phone:selectedCountry.dialCode+values.phone})
  }

  useEffect(()=>{
      DeviceCountry.getCountryCode(TYPE_ANY)
      .then((result) => {
        setSelectedCountry(Countries.find((c)=>c.code==result.code.toUpperCase()))
      })
      .catch((e) => {
       
      });
  },[])
  

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
        <Formik
          initialValues={{ 
            phone:"", 
          }}
          onSubmit={values => onSubmit(values)}
          validationSchema={loginSchema}
        >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <>
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
                <TouchableOpacity 
                  style={{
                    flex:1,
                    justifyContent:"center"
                  }}
                  onPress={()=>setShowCountriesUI(true)}
                >
                  <Text style={styles.callCode}>
                    {selectedCountry?.dialCode}
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
                  onChangeText={handleChange('phone')}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            {
              (touched.phone && errors.phone)&&(
                <Text style={{
                  fontSize:moderateScale(11),
                  color:"red",
                  marginLeft:"2%"
                }}>
                  {errors.phone}
                </Text>
              )
            }
           
          </View>

        
          <View>
            <Button 
              text="Continue"
              bordered
              loading={loading}
              disabled={loading}
              onPress={handleSubmit}
            />
          </View>
         
        </View>
        </>
        )}
      </Formik>
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
