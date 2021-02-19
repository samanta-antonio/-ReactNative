import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

export default function Input({placeholder, senha=false, tipoTeclado='email-address'}){
    return <TextInput style={CSS.input} placeholder={placeholder} secureTextEntry={senha} keyboardType={tipoTeclado}/>
}

const CSS = StyleSheet.create({
    input:{
        width:300,
        height:50,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        fontSize: 20

    }
})