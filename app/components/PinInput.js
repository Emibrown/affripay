import React, {useEffect,useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';




const { width, height } = Dimensions.get('window');

const per_height = (value) => (value*height)/100
const per_width = (value) => (value*width)/100



const PinInput = ({
  onChange = ()=>{},
}) => {

  const [num1,setNum1] = useState('')
  const [num2,setNum2] = useState('')
  const [num3,setNum3] = useState('')
  const [num4,setNum4] = useState('')


  let firstTextInput = '';
  let secondTextInput = '';
  let thirdTextInput = '';
  let fourTextInput = '';

  const onTrigger = () => {
     const value = num1+num2+num3+num4
     onChange(value)
  }

  useEffect( ()=>{
    onTrigger()
  },[num1,num2,num3,num4]) 
 

  return (
    <View style={{paddingHorizontal:"5%",marginTop:"10%", flexDirection:"row",justifyContent:"center"}}>
      <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        style={{...styles.inputStyle}}
        ref={input => {
          firstTextInput = input;
        }}
        onChangeText={(event) => { event && secondTextInput.focus() 
          setNum1(event)}}
        maxLength={1}
      />
      <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        style={{...styles.inputStyle}}
        ref={input => {
          secondTextInput = input;
        }}
        onChangeText={(event) => { event && thirdTextInput.focus() 
          setNum2(event) }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              firstTextInput.focus();
          }
        }}
        maxLength={1}
      />
      <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        style={{...styles.inputStyle}}
        ref={input => {
          thirdTextInput = input;
        }}
        onChangeText={(event) => { event && fourTextInput.focus() 
          setNum3(event) }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              secondTextInput.focus();
          }
        }}
        maxLength={1}
      />
      <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        style={{...styles.inputStyle}}
        onChangeText={(event) => {setNum4(event)}}
        ref={input => {
          fourTextInput = input;
        }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              thirdTextInput.focus();
          }
        }}
        maxLength={1}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle:{
    borderWidth:3,
    borderColor:"#E9ECF4",
    marginHorizontal:"2%",
    textAlign: "center",
    fontSize:moderateScale(18),
    backgroundColor:"#F1F3FA",
    height:moderateScale(52),
    width:"25%",
    borderRadius:6,
    color:"#182D64"
  },
});

export default PinInput;
