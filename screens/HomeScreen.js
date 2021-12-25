import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, Button} from 'react-native'
import FlatButton from "../components/buttons";
import AnimatedLottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            
            <FlatButton 
                    text= "Tap to Start"
                    onPress={() =>
                        navigation.navigate('Timer')}     
            ></FlatButton>

            <View>
                <AnimatedLottieView source={require('../assets/lottie/workingDude.json')}
                style={{width: '100%', aspectRatio: 1}}
                autoPlay
                loop
                />
            </View>
            
        </ImageBackground>

    );
  };


export default HomeScreen


const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',  
                 
    },
    students:{
        position: 'absolute'
        
    },
   
});