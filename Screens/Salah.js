import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Salah({}) {
    return (
    <View style={styles.container}>
        <Text> ফরয  </Text>
        <Text> নফল  </Text>
        <Text> সুন্নাত  </Text>
        <Text> ওয়াজিব  </Text>
        <Text> গুরুত্ব  </Text>
        <Text> নিয়ম   </Text>
        <Text> আমল   </Text>
        <Text> দোয়া    </Text>
        <Text> ............   </Text>
      
        <Text> পবিত্রতা     </Text>
        <Text> অজু    </Text>
        <Text> তায়াম্মুম     </Text>
        <Text> গোসল      </Text>
        <Text> তায়াম্মুম     </Text>
        <Text> ............   </Text>
        <Text> আজান    </Text>
        <Text> ইকামত    </Text>
        <Text> জামাত    </Text>
        <Text> ............   </Text>

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

