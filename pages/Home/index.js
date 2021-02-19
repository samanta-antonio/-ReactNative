import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Input = ({texto, senha, tipoTeclado='default'}) =>{
  return <TextInput style={styles.Input} placeholder={texto} secureTextEntry={senha} keyboardType={tipoTeclado} />
}

export default function Home(props) {
    const {navigation} = props;
  return (
    <View style={styles.container}>
        <StatusBar style="hidden" />
        <Text style={styles.titulo}>Andromeda </Text>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginTexto}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Produtos')}>
                <Text style={styles.loginTexto}>Produtos</Text>
        </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDC9C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMain: {
    flex: 1,
    alignItems: 'center'
   
  },
  titulo:{
    paddingTop: 30,
    fontSize: 30,
    color: 'navy',
  },
  login:{
    width: '50%',
    height:40,
    backgroundColor: 'rgba(255,255,0,.3)',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  loginTexto:{
      color: 'navy',
      fontSize: 15,
      textAlign: 'center',
  },
  
  
});
