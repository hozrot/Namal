import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function MenuCard2({
  menuName,
  daysRemaining,
  menuImage,
  onPress,
  bgColor,
}) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 5,
        overflow: "hidden",
        
       
      }}
      onPress={onPress}
    >
      <Image
        source={menuImage}
        style={{ width: 60, height: 60 ,borderRadius:35,borderWidth:3,borderColor:'white',resizeMode:'cover' }}
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}> {menuName} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
