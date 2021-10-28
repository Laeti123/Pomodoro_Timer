import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

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
        bottom: 100,
    },

    button: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        marginLeft: 80,
        marginRight: 80, 
        top: 33      
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }


})