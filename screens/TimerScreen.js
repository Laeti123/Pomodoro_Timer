import React from "react";
import {View, Button, Text, ImageBackground, StyleSheet} from 'react-native'
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
        
    }

});


