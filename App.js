import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegistrarseUsuarioScreen from "./Screens/RegistrarseUsuarioScreen";
import RegistrarseEmpresaScreen from "./Screens/RegistrarseEmpresaScreen";
import LoginUsuario from "./Screens/LoginUsuario";
import LoginEmpresa from "./Screens/LoginEmpresa";
export default class App extends React.Component {
  render() {
    return (
      <View >
        <RegistrarseUsuarioScreen />
      </View>
    );
  }
}
//style={styles.container}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/