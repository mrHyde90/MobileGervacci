import React from "react";
import {View, Button, StyleSheet} from "react-native";

export const ButtonComponent = ({title, color, funcion}) => {
    return(
        <View>
            <Button title={title} color={color} /> 
        </View>
    );
}

const styles = StyleSheet.create({

});
