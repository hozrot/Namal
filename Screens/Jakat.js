import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Jakat({}) {
    return (
    <View style={styles.container}>
        <Text> Jakat </Text>
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

