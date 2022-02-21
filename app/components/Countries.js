import React, { Component, useState, useEffect } from 'react';
import { 
    TouchableOpacity,
    View, Text,
    TextInput,
    FlatList,
    StyleSheet
 } from 'react-native';
import { Countries as Codes } from '../data/countries'
import CustomTextInput from './CustomTextInput'

 const renderList = ({item}, onSelect)=>{
     return(
         <TouchableOpacity onPress={()=>onSelect(item)}>
             <View style={[Styles.container]}>
                <Text style={[Styles.country]}>{item.en}</Text>
                <Text style={[Styles.countryCode]}>({item.dialCode})</Text>
                {/* <Text style={[Styles.divider]}> | </Text> */}
                
            </View>
         </TouchableOpacity>
     )
 }
 const CountriesUI = (props) => {
     const size = 15;
     const total = Codes.length;
     const [page, setPage] = useState(1)
     const [isSearching, setIsSearching] = useState(false)
     const [loadedCountries, setLoadedCountries] = useState(Codes.slice(0, 2));

     useEffect(()=>{
         
        let start = (page - 1) * size;
        let end = start + size;
        
        setLoadedCountries(Codes.slice(0, end))
     }, [page])

     const SearchText = (text)=>{
         if(text.length >= 1){
            if(!isSearching)setIsSearching(true)
            setLoadedCountries(Codes.filter(c=>c.en.indexOf(text) != -1 || c.dialCode.indexOf(text) != -1).slice(0, size))
         }else{
             setIsSearching(false)
         }
     }
     return (
         <View>
             <View style={Styles.inputContainer}>
                <TextInput style={[Styles.input]} placeholder="Search by country name here..." onChangeText={SearchText}/>
             </View>
             
             <FlatList 
                data={loadedCountries}
                extraData={loadedCountries}
                renderItem={(data)=>renderList(data, props.onSelect)}
                onEndReachedThreshold={50}
                onEndReached={()=>{
                    if(isSearching)return false;
                    if((size*page) < total ){
                        setPage(page+1)
                    }
                }}
            />
         </View>
     );
 }
 
 const Styles = StyleSheet.create({
    
    container:{
        padding:10,
        paddingVertical:15,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:0.8,
        elevation:1,
        backgroundColor:'#fff',
        borderBottomColor:'#f1f1f1'
    },
    divider:{
        color:'#ccc'
    },
    countryCode:{
        fontWeight:'bold',
        fontSize:16,
        paddingHorizontal:15
    },
    country:{
        fontSize:14,
        flex:1,
        paddingHorizontal:15
    },
    inputContainer:{
        padding:10
    },
    input:{
        backgroundColor:"#F1F3FA",
        padding:10
    }
 })
 export default CountriesUI;