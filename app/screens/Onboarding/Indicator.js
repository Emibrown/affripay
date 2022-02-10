import React, {useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { primaryColor } from '../../style/color';

export default function Indicator({
  active = false
}) {
  return (
    <View style={[styles.main,active?styles.active:styles.inactive]}/>
  );
}

const styles = StyleSheet.create({
  main:{
    height:moderateScale(8),
    marginRight:"2%",
    marginLeft:"2%"
  },
  active:{
    backgroundColor:"#267DFF",
    width:moderateScale(8),
    borderRadius:4
  },
  inactive:{
    backgroundColor:"#267DFF",
    width:moderateScale(8),
    borderRadius:4,
    opacity: 0.2,
  },
});
