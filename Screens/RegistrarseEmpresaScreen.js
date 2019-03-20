import React, {Component} from "react";
import {Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import {Card} from "../components/Card";
import {CardSection} from "../components/CardSection";
import {Input} from "../components/Input";
import {ButtonComponent} from "../components/ButtonComponent";

export default class RegistrarseEmpresaScreen extends Component {
    render(){
        return(
            <ScrollView>
            <View  >
                
                <Card colorete={"#66ffff"}> 
                <Text style={styles.titulo}>Registre la empresa</Text>
                    <CardSection>
                        <Input label={"Nombre de la empresa"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Email"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Contrasena"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Descripcion"} multa={true} numberLines={5} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Telefono"} />
                    </CardSection>
                    <CardSection>
                        <Input label={"Direccion"} />
                    </CardSection>
                    
                    <View style={styles.preguntas}>
                        <View style={styles.preguntasItem2}>
                            <Text>Ya tienes cuenta?</Text>
                            <ButtonComponent title={"Logearse"} color={"#0000ff"} />
                        </View>
                        <View style={styles.preguntasItem2}>
                            <Text>Eres Usuario?</Text>
                            <ButtonComponent title={"Registrarse como Usuario"} color={"#0000ff"} />
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