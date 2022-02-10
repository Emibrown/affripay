import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const CustomTextInput = ({
    inputStyle,
    left = null,
    ...props
}) => {

  return (
    <View style={[styles.inputContainer,{backgroundColor:"#F1F3FA"}]}>
      {
        left?(
          <View style={styles.left}>
            {left()}
          </View>
        ):null
      }
      <TextInput 
       {...props} 
       style={[styles.inputStyle]}
       placeholderTextColor="#959FBA"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        height:moderateScale(52),
        borderRadius:10,
        flexDirection:"row"
    },
    left:{
        padding:"5%",
        justifyContent:"center",
    },
    inputStyle:{
        flex:1,
        fontSize:moderateScale(14),
    },
});
