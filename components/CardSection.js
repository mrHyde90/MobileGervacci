import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const CardSection = (props) => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //bordes
        borderWidth: 1, 
        borderColor: "#ddd",
        borderRadius: 2,
        //margenes
        marginTop: 10,
        //padding
        padding: 5
    }
});