import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function DuaCard({ title, arabic,bangla,english,meaning,reference, onPress, date, iconName, iconSize, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
    return (
       <View style={styles.card}>
               <View style={styles.header}>
               <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
                 <View style={{ flex: 1, paddingLeft: 20 }}>
                   <Text style={{fontSize:16,fontWeight:'bold'}}> {title} </Text>
                   <Text style={{fontSize:12,fontWeight:'semibold'}}> {reference} </Text>
                 </View>
                 <TouchableOpacity>
                     <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                 </TouchableOpacity>
                
               </View>
               <View style={styles.ItemBody}>
                 <View style={styles.ItemContent}>
                   <Text style={styles.Arabic}>
                     {arabic}
                   </Text>
                 </View>
                {english && <View style={styles.ItemContent}>
                   <Text>
                   {english}
                   </Text>
                 </View>}
                 <View style={styles.ItemContent}>
                   <Text>
                    {bangla}
                   </Text>
                 </View>
       
                 <View style={styles.ItemContent}>
                  <Text> {meaning}</Text>
                 </View>
               </View>
               <View style={styles.ItemFooter}>
                <TouchableOpacity>
                <Text> Details.. </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text> More. </Text>
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                </TouchableOpacity>

               </View>
             </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        backgroundColor: "lightblue",
        margin: 10,
      },
    header: {
        flex: 0.1,
        flexDirection: "row",
        padding: 5,
      },
      ItemBody: {
        flex: 0.8,
        flexDirection: "column",
        backgroundColor: "lightgreen",
      },
      ItemContent: {
        flexDirection: "row",
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      },
      Arabic: {
        fontSize: 30,
        color: "red",
        textAlign: "center",
      },
      Bangla: {},
      English: {},
      ItemFooter: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
        backgroundColor: "lightblue",
        justifyContent: "space-between",
        width: "100%",
      },

})