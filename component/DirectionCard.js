import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function DirectionCard({
    distence,
  listName,
  day,
  daysRemaining,
  eventName,
  onPress,
  bgColor,
}) {
  return (
   <View style={{flexDirection:'row',height:150,
          backgroundColor:'#40CC83',borderRadius:35,margin:10}}>
         <View style={{flex:.4,padding:10,justifyContent:'space-around'}}>
   
          <Text style={{fontSize:14,color:'white',padding:5,textAlign:'center' }}>  Direction </Text>
          <Text style={{ fontSize:14,color:'white',padding:5,textAlign:'center'}}>Nearst Mosque is  in {distence} away  </Text>
         
         <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#7FCEAA',padding:5,borderRadius:35,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="map-marker" size={16} color="red" />
          <Text>Way in Map</Text>
          </TouchableOpacity>
          </View>
         <View style={{flex:.6,justifyContent:'center',alignItems:'center',backgroundColor:'#7FCEAA',borderRadius:35,borderWidth:1,borderColor:'white'}}>
   
          <Text>Compass</Text>
          </View>
         
           </View>
  );
}

const styles = StyleSheet.create({});
