import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Hajj({}) {
    return (
    <View style={styles.container}>
        <Text> Hajj </Text>
        <Text> হজ্জ  </Text>
        <Text> ওমরাহ  </Text>
        <Text> নিয়ম   </Text>
        <Text> সময়   </Text>
        <Text> গুরুতব   </Text>
    </View>
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

