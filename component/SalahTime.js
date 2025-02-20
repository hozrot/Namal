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
       
    <View style={{flex:.2}}> <Image
       source={image}
       style={{ width: 45, height: 45 }}
     />
     </View>
     <View  style={{flex:.2}}>
     <Text> {name}  </Text>
     </View>
     <View  style={{flex:.4}}>
     <Text> Will ends in {willEndIn} </Text>
     </View>
     <View  style={{flex:.2}}>
     <Text> {time} </Text>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({});
