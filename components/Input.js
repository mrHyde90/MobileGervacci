import React from "react";
import {View, StyleSheet, TextInput, Text} from "react-native";

export const Input = ({label, placeholder, valor, funcion, multa, numberLines }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.inputStyle} multiline={multa} numberOfLines={numberLines}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#ddd"
    }, 
    label: {
        fontSize: 20
    }, 
    inputStyle: {
        backgroundColor: "#fff", 
        margin: 5, 
        borderWidth: 2, 
        borderColor: "#fff", 
        borderRadius: 4
    }
});