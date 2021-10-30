import React from "react";
import {View, Button, Text, ImageBackground, StyleSheet, Image} from 'react-native'
import AnimatedLottieView from 'lottie-react-native';

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

            <View style={styles.speechBubbleContainer}>
                <Image
                    //fadeDuration={2000}
                    source={require('../assets/Speechbubble.png')}
                    style={styles.speechbubble}
                ></Image>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Starte den Timer und beginne zu grinsen</Text>
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
        bottom: 0,
        position: 'absolute',
        
    },
    speechBubbleContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        top: 190,
        right: -60   
    },
    speechbubble:{
        width: 500,
        height: 500
    },
    titleContainer:{
        alignItems: 'center',
        top: 60
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }

});


