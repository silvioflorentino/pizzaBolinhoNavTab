import * as React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';


export default function Home(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.letreiro}> Pizzaria Bolinhos</Text>
      <Image style={estilo.img} source={require("../assets/pizza-g8f4263f5f_640.png")} />
      <Text style={estilo.letreiro}> Garanta seu sorrisinho</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#B40404",
    alignItems:"center",
    justifyContent:"center"
  },
  letreiro:{
    fontSize: 25,
    color:"#FBF5EF",
    textAlign:"center",
    marginTop: 5

  },
  img:{
    width:200,
    height:150,
    borderRadius: 50,
    marginTop:80

  }
})

