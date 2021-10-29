import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native"

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
        borderRadius: 10,
        backgroundColor: 'transparent',
       
           
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }


})