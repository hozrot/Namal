import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function EventCard({
  eventName,
  daysRemaining,
  eventImage,
  onPress,
  bgColor
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        width: "100%",
        paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5,
        backgroundColor: { backgroundColor: bgColor},
      }}
    >
      <View style={{ flex: 0.1 }}>
        <Image source={eventImage} style={{ width: 30, height: 30 }} />
      </View>
      <View style={{ flex: 0.9 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", paddingLeft: 10 }}>
          {" "}
          {eventName} Start in {daysRemaining} Days{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
