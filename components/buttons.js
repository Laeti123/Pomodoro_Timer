import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import AnimatedLottieView from 'lottie-react-native';

export default function FlatButton({text, onPress}) {
    return(

        <View style={styles.container}>

            <TouchableOpacity onPress={onPress}>
                <View style= {styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
      
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignContent: 'center',
        
    },

    button: {
        width:'40%',    
        borderRadius: 14,
        backgroundColor: 'cornsilk',
        left: 120,
        borderWidth: 3,
        borderColor: 'antiquewhite'
    },
    
    buttonText: {
        color: 'darkmagenta',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }


})