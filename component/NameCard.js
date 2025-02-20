import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function NameCard({ title,count, arabic,bangla,english,meaning,bgColor, onPress, date, iconName, iconSize, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
    return (
        <View style={{ backgroundColor:'tomato',padding:5,margin:10} }>
               <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between',width: '100%',padding: 5, }}>
                 <Text>{title} </Text>
                 {count && <View style={{ backgroundColor:'#209A8F',padding:5,borderRadius:10 }}>
                 <Text  style={{fontSize:20,fontWeight:'bold',color:'white'}}> {count} </Text>
                 </View>}
                 
                 <Text> More.. </Text>
               </TouchableOpacity>
               <View style={{ justifyContent:'center',alignItems:'center',padding:5 }}>
               <Text style={{fontSize:48,fontWeight:'bold'}}> {arabic}</Text>
               <Text style={{fontSize:16,fontWeight:'heavy'}}> {english}</Text>
               <Text style={{fontSize:16,fontWeight:'heavy'}}>  {bangla}</Text>
               <Text style={{fontSize:20,fontWeight:'heavy',textAlign:'center'}}>{meaning}</Text> 
               </View>
             </View>
    );
}

