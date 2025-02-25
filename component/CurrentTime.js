import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SalahTime({
    image,
  name,
  time,
  namaj,
willEndIn,
}) {
  return (
    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#40CC83',borderRadius:35,margin:10}}>
     
      <View style={{padding:10,backgroundColor:'#39A57D',borderRadius:35,justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> এখন সময়  </Text>
      <View style={{padding:10,backgroundColor:'#7FCEAA',justifyContent:'center',alignItems:'center',margin:10}}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> {name}   </Text>
        <Text style={{fontSize:26,fontWeight:'bold',color:'white'}}> {time} </Text>
     </View>
      <Text style={{fontSize:24,fontWeight:'bold',color:'white'}}> সময় বাকি </Text>
      </View>
        <Text style={{fontSize:36,fontWeight:'bold',color:'white'}}> 5:10:47 </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
