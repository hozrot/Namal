import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import JakatDetails from './JakatDetails';
const Tab = createMaterialTopTabNavigator();


export default function Jakat({}) {
    return (
  
    <Tab.Navigator>
             
             
    <Tab.Screen
     name="one"
     component={JakatDetails}
     options={{
       tabBarLabel: "যাকাত",
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

