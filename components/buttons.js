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
        borderRadius: 10,
        backgroundColor: 'floralwhite',
        left: 120,
        borderWidth: 1.5,
        borderColor: 'mediumpurple'
    },
    
    buttonText: {
        color: 'mediumpurple',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }


})