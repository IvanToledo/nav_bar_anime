import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign }from '@expo/vector-icons';

export default function OnePiece(){
  return (
    <View Style={estilo.container}>
    <Text Style={estilo.titulo}> One Piece </Text>
  <Text Style={estilo.conceito}> A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.
</Text>
<Image style={estilo.img} resizeMode={'contain'} source={require('../assets/onepiece.JPG')}/>
      
      <View style={estilo.fundo}>
      <Text Style={estilo.topicos}>
     <AntDesign name="doubleright" size={24} color="black" style={estilo.icon}/>
      ONE PEACE </Text>
       

    </View>
    </View>
  );
}
const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundcolor:'#00BFFF'
  },

  conceito: {
    fontSize:18,
    textAlign: 'justify',
    margin: 15
  },

  titulo: {
    marginTop: 30,
    marginBottoom:20,
    fontSize: 30,
  },



  topicos:{
    fontSize: 20,
    marginLeft:20,
  },

  img:{
    width: largura -200,
    borderRadius:30,
    margin:10,
    },
    
    fundo:{
      backgroundColor: '#00BFFF',
      borderRadius:20,
      marginHorizontal:20
    },
    icon:{
      marginrigth:20
    }
})