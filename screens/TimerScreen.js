import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const screen = Dimensions.get('window');

//formatNumber und getRemaining sind function components
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

//wir benutzen Hooks! das ist z.B useState() und useEffect. Hooks sind quasi funktionen die man import aus anderen Klassen ohne die gesamte Klasse zu importieren
//Hooks werden benutzt wenn man ein function component schreibt und man merkt dass man bestimmte funtionen braucht z.B wenn du ein State hinzufügen musst 
const TimerScreen = ({ navigation}) => {

    const [remainingSecs, setRemainingSecs] = useState(1500);//usestate(0) bedeutet, dass wir ab 0 Sekunden beginnen
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
  
    const toggle = () => {//immer wenn ich den timer umschalte, dann wird meine isActive Variable geupdatet. toggle() bezieht sich nur auf start und pause
      setIsActive(!isActive);
    }
  
    const reset = () => {
      setRemainingSecs(1500);
      setIsActive(false);
    }

    const break_Session = () => {
      setRemainingSecs(300);  
    }
  
    //What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
    useEffect(() => {
      let interval = null;

      if (isActive && remainingSecs !== 0) {
        interval = setInterval(() => { //alle 1000 millisekunden also jede sekunde wird remainingSecs auf remainingSecs +1 gesetzt
          setRemainingSecs(remainingSecs => remainingSecs - 1);
        }, 1000);
      } else if (!isActive && remainingSecs !== 0) {
        clearInterval(interval);
      } else if (isActive && remainingSecs == 0) {
        break_Session();
      }

      return () => clearInterval(interval);

    }, [isActive, remainingSecs]); //<- [isActive, remainingSecs] sind die Parameter die übergeben werden müssen bei useEffect()

    
    return (
        <ImageBackground source={require('../assets/TimerScreenColor.jpg')} style={styles.container} >
            
            <View style={styles.timer}>
                <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            </View>
        
            <TouchableOpacity onPress={toggle} style={styles.buttonStartPause}>
                <Text style={styles.buttonStartPauseText}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={reset} style={styles.buttonReset}>
                <Text style={styles.buttonTextReset}>Reset</Text>
            </TouchableOpacity>

            <View style={styles.study}>
                <AnimatedLottieView source={require('../assets/lottie/study.json')}
                    style={{width: '90%', 
                            aspectRatio: 1,
                            position: 'absolute',}}
                    autoPlay
                    loop
                    />
            </View> 

        </ImageBackground>
    );
}

export default TimerScreen



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '100%'
    },
    timer:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 130
    },
    timerText: {
        color: 'cornsilk',
        fontSize: 70,   
    },
    buttonStartPause: {
        width:'40%',    
        borderRadius: 10,
        backgroundColor: 'turquoise',
        borderWidth: 2.0,
        borderColor: 'cornsilk'
    },
    buttonStartPauseText:{
        color: 'darkmagenta',
        textAlign: "center",
    },
    buttonReset: {
        width:'40%',    
        borderRadius: 10,
        backgroundColor: 'darkmagenta',
        marginTop: 20,
        borderWidth: 2.0,
        borderColor: 'cornsilk'
    },
    buttonTextReset: {
        color: 'turquoise',
        textAlign: "center",
    },
    study:{
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -200,
        left: 20
    }
   
});


