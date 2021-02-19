import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import Monóculo  from './../../assets/produtos/ima1.jpg';
import Celestron  from './../../assets/produtos/ima2.jpg';
import Lunatta  from './../../assets/produtos/ima3.jpg';
import Ponteira  from './../../assets/produtos/ima4.jpg';
export default function Produtos (){
    const DADOS = [
        {
            nome: 'Monóculo GSN 8x40 WA',
            preco: 250,
            imagem: Monóculo
        },
        {
            nome: 'Celestron NKX',
            preco: 4000,
            imagem: Celestron
        },
        {
            nome: 'Lunatta Telescope',
            preco: 8900,
            imagem: Lunatta
        },
        {
            nome: 'Ponteira laser',
            preco: 240,
            imagem: Ponteira
        },
    ]
    function Produto ({item}){
        return <View style={styles.produtoBox}>
                    <Image source={item.imagem}  style={styles.produtoImagem}/>
                    <View style={styles.produtoBoxText}>
                    <Text style={styles.produtoNome} >{item.nome}</Text>
                    <Text style={styles.produtoPreco}>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                    </View>
                </View>
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30, color:'navy', marginTop:10, marginBottom:20}}> Pagina de produtos!</Text>
            <FlatList
                data={DADOS}
                renderItem={Produto}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CDC9C9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    produtoBox:{
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    produtoImagem: {
       width: '50%',
       height: 80,
       resizeMode: 'cover' 
    },
    produtoBoxText:{
        width: '100%',
        backgroundColor: 'rgba(255,255,0,.3)',
        marginHorizontal: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'center',

    },
    produtoNome: {
        color: 'navy',
        marginLeft: 10,
        fontSize: 20
    },
    produtoPreco: {
        color: 'red',
        marginLeft: 10,
        fontSize: 15
    },
      
});