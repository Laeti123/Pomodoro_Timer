import React from "react";
import {View, Button, Text, ImageBackground, StyleSheet, Image} from 'react-native'
import AnimatedLottieView from 'lottie-react-native';
import { ScreenStackHeaderRightView } from "react-native-screens";

const TimerScreen = ({ navigation}) => {
    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            <View style={styles.girlContainer}>
                <AnimatedLottieView source={require('../assets/lottie/happyGirl.json')}
                 style={{width: '100%', aspectRatio: 1}}
                 autoPlay
                 loop
                 />
            </View >

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Start and study</Text>
            </View>

            <View style={styles.doggoContainer}>
                <AnimatedLottieView source={require('../assets/lottie/cuteDoggo.json')}
                    style={{width: '25%', aspectRatio: 1}}
                    autoPlay
                    loop
                    /> 
            </View>  

        </ImageBackground>
    );
};

export default TimerScreen



const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    girlContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        left: 10,
        bottom: -20,
        position: 'absolute',     
    }, 
    titleContainer:{
        alignItems: 'center',
        top: 60
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    doggoContainer:{
        alignItems: 'center',
        left: 100  
    },
   
});


