import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const TimerScreen = ({ navigation}) => {

    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
  
    const toggle = () => {
      setIsActive(!isActive);
    }
  
    const reset = () => {
      setRemainingSecs(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs + 1);
        }, 1000);
      } else if (!isActive && remainingSecs !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}

/*
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

*/
export default TimerScreen



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '100%'
    },
    button: {
        borderWidth: 10,
        borderColor: '#B9AAFF',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: '#B9AAFF'
    },
    timerText: {
        color: '#fff',
        fontSize: 90,
        marginBottom: 20
    },
    buttonReset: {
        marginTop: 20,
        borderColor: "#FF851B"
    },
    buttonTextReset: {
        color: "#FF851B"
    }

/*
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
*/
   
   
});


