import React from "react";
import {View, Button, Text, ImageBackground, StyleSheet, Image} from 'react-native'
import AnimatedLottieView from 'lottie-react-native';
import { ScreenStackHeaderRightView } from "react-native-screens";

const TimerScreen = ({ navigation}) => {
    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            <View style={styles.studyContainer}>
                <AnimatedLottieView source={require('../assets/lottie/study.json')}
                 style={{width: '90%', aspectRatio: 1}}
                 autoPlay
                 loop
                 />
            </View >

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Start and study</Text>
            </View>


        </ImageBackground>
    );
};

export default TimerScreen



const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    studyContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        left: 40,
        bottom: -40,
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


