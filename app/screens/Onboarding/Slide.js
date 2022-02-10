import React, {useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View,Dimensions,ImageBackground,Image} from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const { width, height } = Dimensions.get('window');
const per_height = (value) => (value*height)/100

export default function Slide({
  img,
  title,
  text
}) {
  return (
    <View style={styles.slide}>
      <View style={{
        alignItems:"center",
        paddingTop:"25%"
      }}>
        <Image style={styles.imageBox} source={img}  resizeMode="contain"/>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.text}>
            {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide:{
    width,
  },
  imageBox:{
    height:per_height(30)
  },
  textBox:{
    paddingTop:"10%"
  },
  title:{
    fontSize:moderateScale(24),
    fontWeight:"bold",
    color:"#182D64",
    lineHeight:32,
    textAlign:"center",
    marginHorizontal:"10%"
  },
  text:{
    fontSize:moderateScale(14),
    fontWeight:"500",
    marginTop:"5%",
    lineHeight:22,
    color:"#7581A1",
    textAlign:"center",
    marginHorizontal:"5%"
  }
});
