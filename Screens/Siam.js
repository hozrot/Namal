import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Siam({}) {
    return (
    <View style={styles.container}>
         <Text> ফরয  </Text>
               <Text> নফল  </Text>
               <Text> সুন্নাত  </Text>
               <Text> গুরুত্ব  </Text>
               <Text> নিয়ম   </Text>
                <Text> আমল   </Text>
                <Text> দোয়া    </Text>
                <Text> ............   </Text>
                <Text> ইফতার     </Text>
                <Text> সেহরি    </Text>
               



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

