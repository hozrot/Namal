import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//npx expo install @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import SalahDetails from "./SalahDetails";
import Cleanness from "./Cleanness";
import Mosque from "./Mosque";
import SalahOthers from "./SalahOthers";


export default function Salah({}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="one"
        component={SalahDetails}
        options={{
          tabBarLabel: "নামায",
        }}
      />
      <Tab.Screen
        name="Two"
        component={Cleanness}
        options={{
          tabBarLabel: "পবিত্রতা",
        }}
      />
      <Tab.Screen
        name="Three"
        component={Mosque}
        options={{
          tabBarLabel: "মসজিদ",
        }}
      />
      <Tab.Screen
        name="Four"
        component={SalahOthers}
        options={{
          tabBarLabel: "দোয়া",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
    overflow: "hidden",
  },
});
