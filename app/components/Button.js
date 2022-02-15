import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';

const width = Dimensions.get('window').width;

const Button = ({
  text,
  onPress,
  type = 'filled',
  bordered = false,
  size = 'large',
  isDisabled = false,
}) => {
  const large = '100%';
  const small = 50;
  const btnWidth = size === 'large' ? large : small;
  const btnHeight = size === 'large' ? moderateScale(15) : moderateScale(6);
  const fontSize = size === 'large' ? moderateScale(18) : moderateScale(12);
  const btnTextColor = type === 'filled' ? '#ffffff' : '#000000';
  const btnBorderRadius = bordered ? moderateScale(9) : 40;

  //   const disa  =  dis === true ?

  const containerCommonStyle = {
    width:"100%",
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  let isDisa = isDisabled ? true : false;

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: fontSize,
    textTransform: 'none',
    textAlign: 'center',
    fontWeight: '700',
  };

  // const border = type === 'outlined' && {
  //   borderColor: '#e7e7e7',
  //   borderWidth: 2,
  // };

  let buttonBackgroundColor = isDisabled
    ? ['#8B16FF80', '#125FD280']
    : ['#8B16FF', '#125FD2'];

  if (type === 'outlined') {
    return (
      <TouchableOpacity style={[containerCommonStyle, {borderRadius: btnBorderRadius},{borderWidth:1.5,borderColor:"#324CDE"}]} onPress={onPress} disabled={isDisa}>
        <Text style={[textCommonStyle,styles.buttonText]}>{text}</Text>
      </TouchableOpacity>

    );
  }
  return (
    <TouchableOpacity style={[containerCommonStyle, {borderRadius: btnBorderRadius}]} onPress={onPress} activeOpacity={0.7} disabled={isDisa}>
      <LinearGradient
        colors={buttonBackgroundColor}
        locations={[0.0, 1]}
        style={{flex:1, paddingVertical: btnHeight,}}
        >
          <Text style={[textCommonStyle]}> {text} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  grediant: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    // flex: 1.0,
    // alignSelf: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    margin: 1,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color:"#252B48",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    fontSize: 18,
    fontWeight: "500",
  },
});
