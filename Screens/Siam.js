import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import SiamDetails from './SiamDetails';
import SiamRules from './SiamRules';
import SiamOthers from './SiamOthers';

export default function Siam({}) {
    return (
    
    <Tab.Navigator>
    <Tab.Screen
     name="Two"
     component={SiamDetails}
     options={{
       tabBarLabel: "রোজা",
     }}
    />
    <Tab.Screen
     name="Three"
     component={SiamRules}
     options={{
       tabBarLabel: "নিয়ম",
     }}
    />
    <Tab.Screen
     name="Four"
     component={SiamOthers}
     options={{
       tabBarLabel: " অন্যান্য",
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

