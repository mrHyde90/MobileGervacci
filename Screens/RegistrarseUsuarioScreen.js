import React, {Component} from "react";
import {Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import {Card} from "../components/Card";
import {CardSection} from "../components/CardSection";
import {Input} from "../components/Input";
import {ButtonComponent} from "../components/ButtonComponent";

export default class RegistrarseUsuarioScreen extends Component {
    render(){
        return(
            <ScrollView>
            <View  >
                
                <Card colorete={"#33cc33"}> 
                <Text style={styles.titulo}>Registrarse</Text>
                    <CardSection>
                        <Input label={"Nombre"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Email"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Contrasena"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Telefono"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Carrera"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Matricula"} />
                    </CardSection>
                    
                    <View style={styles.preguntas}>
                        <View style={styles.preguntasItem2}>
                            <Text>Ya tienes cuenta?</Text>
                            <ButtonComponent title={"Logearse"} color={"#0000ff"} />
                        </View>
                        <View style={styles.preguntasItem2}>
                            <Text>Eres Empresa?</Text>
                            <ButtonComponent title={"Registrarse como empresa"} color={"#0000ff"} />
                        </View>
                    </View>
                </Card>
                
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    preguntas: {
        marginTop: 10
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