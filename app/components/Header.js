import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  IconlyProvider,
  ChevronLeft,
} from 'react-native-iconly';
import { useNavigation } from '@react-navigation/native';


const Header = ({
  title = null
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{
        position:"absolute",
        marginLeft:"5%",
      }}>
        <IconlyProvider
          primaryColor="#182D64"
        >
          <ChevronLeft  size={28} />
        </IconlyProvider>
      </TouchableOpacity>
      <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      }}>
        <Text style={{
          color:"#182D64",
          fontWeight:'bold',
          fontSize:moderateScale(16)
        }}> 
        {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header:{
    paddingVertical:'5%',
    flexDirection:"row",
    alignItems:"center"
  },
});
