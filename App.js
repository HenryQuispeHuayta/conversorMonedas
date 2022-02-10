import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Alert
} from 'react-native';

  const res = (bs, valor) =>{
    var n1 = 2;
    var n2 = 3;
    var conv = bs+valor;
    let conv1 = parseInt(bs) + parseInt(valor);
    alert(conv1);
    return conv;
  };
const App = ()  =>{
  //const [text, onChangeText] = React.useState("Bs");
  return(
    <View style = {estilos.contenedor}>
      <View style = {estilos.resultado}>
        <TextInput
            style={estilos.input}
           // placeholder = "Bs"
            value={res("1", "2")}
        />
      </View>
      <View style = {estilos.entrada}>
         <Button
           title="Convertir"
           color="red"
          />
         <Button
           title="Iniciar"
           color='red'
           onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
      
        <Text style = {estilos.text}>
          Dolares
        </Text>
        <Text style = {estilos.text}>
          Euros
        </Text>
        <Text style = {estilos.text}>
          Soles
        </Text>
        <Text style = {estilos.text}>
          Pesos Chile
        </Text>
        <Text style = {estilos.text}>
          Reales Brasil
        </Text>
        <Text style = {estilos.text}>
          Yuan China
        </Text>
        <Text style = {estilos.text}>
          
        
        </Text>
      </View>
    </View>
  );
};    
       
const estilos = StyleSheet.create({
  contenedor:{
    flex: 1,
  },
  resultado:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  entrada:{
    flex: 5,
    backgroundColor: 'white'
  },
  salida:{
    flex: 2,
    backgroundColor: 'white'
  },
  text:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'left'
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'right',
  }
})
export default App;

