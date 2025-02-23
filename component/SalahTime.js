import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SalahTime({
    image,
  name,
  time,
    willEndIn,
}) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center",alignItems: "center",padding:5 }}>
       
    <View style={{flex:.15}}> <Image
       source={image}
       style={{ width: 35, height: 35 }}
     />
     </View>
     <View  style={{flex:.15}}>
     <Text> {name}  </Text>
     </View>
     <View  style={{flex:.5, justifyContent:'center',alignItems:'center'}}>
     <Text style={{textAlign:'center'}}> Will ends in {willEndIn} </Text>
     </View>
     <View  style={{flex:.2,justifyContent:'center',alignItems:'center'}}>
     <Text style={{textAlign:'center'}}> {time} </Text>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({});
