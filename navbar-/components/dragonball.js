import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DragonBall() {
  return (
    <View Style={estilo.container}>
      <Text style={estilo.titulo}> Dragon Ball Z </Text>
      <Text style={estilo.conceito}>
        
       Dragon Ball Z, anime antigo que passa muito tempo na televisão aberta, apresenta Goku, sua família e amigos, num universo de vilões, onde existem alguns super-humanos e Goku faz parte deste, onde tem que derrotar os inimigos de forma incomum e extra-terrestres.
      </Text>
      <Image
        style={estilo.img}
        resizeMode={'contain'}
        source={require('../assets/vegeta.JPG')}
      />
      <Text style={estilo.subtitulo}> Criacão de Akira Toriyama </Text>
      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <AntDesign
            name="doubleright"
            size={24}
            color="black"
            style={estilo.icon}
          />
          Família dragonball
        </Text>
        <Text style={estilo.topicos}> Dragon Ball Z  </Text>
        <AntDesign
          name="doubleright"
          size={24}
          color="black"
          style={estilo.icon}
        />
        <Text style={estilo.topicos}> Goku e Gohan </Text>
        <AntDesign
          name="doubleright"
          size={24}
          color="black"
          style={estilo.icon}
        />
        <Text style={estilo.topicos}> Vegeta e Tranks </Text>
        <AntDesign
          name="doubleright"
          size={24}
          color="black"
          style={estilo.icon}
        />
        <Text style={estilo.topicos}>
            <AntDesign
          name="doubleright"
          size={24}
          color="black"
          style={estilo.icon}
        />
         
         Pulma e Curirim </Text>
      </View>
    </View>
  );
}
const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#00BFFF',
  },

  conceito: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
  },

  titulo: {
    marginTop: 30,
    marginBottoom: 20,
    fontSize: 30,
  },

  subtitulo: {
    marginBottoom: 20,
    marginLeft: 20,
    fontSize: 20,
  },

  topicos: {
    fontSize: 20,
    marginLeft: 20,
  },

  img: {
    width: largura - 200,
    heigth: 200,
    borderRadius: 30,
    margin: 10,
  },

  fundo: {
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  icon: {
    marginrigth: 20
  }
})