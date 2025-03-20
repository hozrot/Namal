import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ImanDetails from './ImanDetails';
const Tab = createMaterialTopTabNavigator();

export default function Iman({}) {
    return (
    
    <Tab.Navigator>
             
             
    <Tab.Screen
     name="one"
     component={ImanDetails}
     options={{
       tabBarLabel: "বিশ্বাস",
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

