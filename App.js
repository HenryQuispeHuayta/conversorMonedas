import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const App = () =>{
  return (
    <View>
      <Text style = {estilos.titulo}>hqh</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25,
    color: 'red'
  }
}) 

export default App;

