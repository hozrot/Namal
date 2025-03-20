import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HajjDetails from './HajjDetails';
import Omrah from './Omrah';
import HajjOthers from './HajjOthers';
const Tab = createMaterialTopTabNavigator();

export default function Hajj({}) {
    return (
   
    <Tab.Navigator>
             
             
    <Tab.Screen
     name="one"
     component={HajjDetails}
     options={{
       tabBarLabel: "হজ্জ",
     }}
    />
    <Tab.Screen
     name="Two"
     component={Omrah}
     options={{
       tabBarLabel: " ওমরাহ ",
     }}
    />
   
    <Tab.Screen
     name="Four"
     component={HajjOthers}
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

