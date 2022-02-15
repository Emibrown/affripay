import React, {useEffect,useState,useRef} from 'react';
import { StyleSheet, Dimensions, View,Text,Image,ScrollView,StatusBar} from 'react-native';
import { primaryColor } from '../../style/color';
import Slide from './Slide';
import Indicator from './Indicator';
import { moderateScale } from 'react-native-size-matters';
import img1 from "../../assets/images/Group4.png"
import img2 from "../../assets/images/Group1.png"
import img3 from "../../assets/images/Group3.png"
import img4 from "../../assets/images/Group2.png"
import Button from '../../components/Button';
import bg from "../../assets/images/bg.png"





const { width, height } = Dimensions.get('window');
const per_height = (value) => (value*height)/100

const slide = [
    {
        img:img1,
        title:"Smart payment, make smart lifestyle",
        text:"sending money with your mobile device at your own ease making banking less dificult"
    },
    {
        img:img2,
        title:"Smart payment, make smart lifestyle",
        text:"sending money with your mobile device at your own ease making banking less dificult"
    },
    {
        img:img3,
        title:"Smart payment, make smart lifestyle",
        text:"sending money with your mobile device at your own ease making banking less dificult"
    },
    {
        img:img4,
        title:"Smart payment, make smart lifestyle",
        text:"sending money with your mobile device at your own ease making banking less dificult"
    }
]

export default function Onboarding({navigation}) {
    const scrollEl = useRef(null);
    const [sliderState, setSliderState] = useState({ currentPage: 0 });

    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.round(x / width);
        if (indexOfNextScreen !== currentPage) {
          setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
          });
        }
    };

    const scrollHandler = () => {
        scrollEl.current.scrollTo({
            x: width * (pageIndex+1),
            y: 0,
            animated: true,
        });
    };

    const { currentPage: pageIndex } = sliderState;

    useEffect( ()=>{
        const timer = setTimeout(() => {
            scrollHandler()
            if(pageIndex == 2){
            scrollEl.current.scrollTo({
                x: width * (0),
                y: 0,
                animated: true,
            });
            } 
        }, 3000);
        return () => clearTimeout(timer);
    },[pageIndex])

    const onPressLogin = () => {
        navigation.navigate('Login');
    };

    const onPressSignup = () => {
        navigation.navigate('Signup');
    };
  
    return (
        <View style={{...styles.container,backgroundColor:"white"}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={{
                flex:1,
            }}>
                <View style={{
                   height:"70%",
                   flexDirection:"row",
                //    backgroundColor:"red",
                   justifyContent:"center",
                   alignItems:"flex-end",
                   paddingBottom:"5%"
                }}>
                    <ScrollView
                        ref={scrollEl}
                        horizontal={true}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScroll={(event) => {
                            setSliderPage(event);
                        }}
                    >
                        {
                            slide.map((item,i)=>(
                                <Slide 
                                    key={i}
                                    img={item.img}
                                    title={item.title}
                                    text={item.text}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        // marginTop:"12%"
                    }}>
                        {
                            slide.map((item,i)=>(
                                <Indicator key={i} active={sliderState.currentPage == i} />
                            ))
                        }
                    </View>

                    <View style={{
                        marginHorizontal:"10%",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginTop:"15%"
                    }}>
                        <View style={{
                            width:"48%"
                        }}>
                            <Button 
                                text="Login"
                                bordered
                                onPress={onPressLogin}
                            />
                        </View>
                        <View style={{
                            width:"48%"
                        }}>
                            <Button 
                                text="Sign Up"
                                bordered
                                type="outlined"
                                onPress={onPressSignup}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    width:"100%",
                    position:"absolute",
                    bottom:0,
                    alignItems:"center",
                    justifyContent:"center",
                    zIndex:-1
                }}>
                    <Image style={styles.imageBox} source={bg}  resizeMode="center" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox:{
    width:per_height(100),
    height:per_height(15),
  },
  footer:{
    // paddingTop:"15%",
    flex:1,
    justifyContent:"flex-end",
    paddingBottom:"8%",
  },
  btn:{
    backgroundColor:primaryColor,
    justifyContent:"center",
    alignItems:"center",
    width:moderateScale(88),
    height:moderateScale(60),
    borderRadius:12
  }
});
