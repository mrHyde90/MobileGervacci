import React, {Component} from "react";
import {Text, View, StyleSheet } from "react-native";
import {Card} from "../components/Card";
import {CardSection} from "../components/CardSection";
import {Input} from "../components/Input";
import {ButtonComponent} from "../components/ButtonComponent";

export default class LoginUsuario extends Component {
    render(){
        return(
            <View  >
                <Card colorete={"#33cc33"}>
                    <Text style={styles.titulo}>Ingrese a su cuenta</Text>
                    <CardSection>
                        <Input label={"Email"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Contrasena"} />
                    </CardSection>
                    <View style={styles.preguntas}>
                        <View style={styles.preguntasItem2}>
                            <Text>Aun no tienes cuenta?</Text>
                            <ButtonComponent title={"Crear cuenta usuario"} color={"#0000ff"} />
                        </View>
                        <View style={styles.preguntasItem2}>
                            <Text>Eres Empresa?</Text>
                            <ButtonComponent title={"Logearse cono Empresa"} color={"#0000ff"} />
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preguntas: {
        marginTop: 20
    },
    preguntasItem2: {
        marginTop: 20, 
        marginBottom: 20
    }, 
    titulo: {
        fontSize: 30, 
        textAlign: "center"
    }
});