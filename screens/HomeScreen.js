import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, Button} from 'react-native'
import FlatButton from "../components/buttons";
import AnimatedLottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/color_Background.jpg')} style={styles.container} >
            
            <View style={styles.confetti}>
                <AnimatedLottieView source={require('../assets/lottie/confetti2.json')}
                 style={{width: '90%', aspectRatio: 1}}
                 autoPlay
                 loop
                 />
            </View >
            <FlatButton 
                    text= "Tap to Start"
                    onPress={() =>
                        navigation.navigate('Timer')}     
            ></FlatButton>

        </ImageBackground>

    );
  };

/*
<View style={styles.confetti}>
                <AnimatedLottieView source={require('../assets/lottie/confetti2.json')}
                 style={{width: '90%', aspectRatio: 1}}
                 autoPlay
                 loop
                 />
            </View >
*/

export default HomeScreen


const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',  
                 
    },
    confetti:{
        left: 25,
        top: 240,
        position: 'absolute'
        
    },
   
});