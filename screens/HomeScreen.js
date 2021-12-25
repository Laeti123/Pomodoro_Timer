import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, Button} from 'react-native'
import FlatButton from "../components/buttons";
import AnimatedLottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Your Pomodoro Session</Text>
            </View>

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

            <View>
                <AnimatedLottieView source={require('../assets/lottie/studyLines.json')}
                style={{width: '80%', 
                        aspectRatio: 1,
                        position: 'absolute',
                        bottom: -110,
                        left: 38}}
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
        width: '100%', 
        height: '100%'
                 
    },
    titleContainer:{
        position: 'absolute',
        alignItems: 'center',
        top: 60,
        left: 90
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});