import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function MenuCard({
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
        backgroundColor: "tomato",
      }}
      onPress={onPress}
    >
      <Image
        source={menuImage}
        style={{ width: 50, height: 50 }}
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}> {menuName} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
