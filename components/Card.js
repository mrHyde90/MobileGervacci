import React from "react";
import {View, StyleSheet, Text} from "react-native";

export const Card = (props) => {
    console.log(props.colorete);
    return(
        <View style={[styles.container, {backgroundColor: props.colorete}]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //bordes
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        //padding
        padding: 5,
        //Margenes
        marginTop: 25,
        marginRight: 5,
        marginLeft: 5
    }
});

