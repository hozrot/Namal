import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function QuoteCard({
    QuotesTitle,
  Quote,
  Reference,
  bgcolor="cream",
  onPress,
  titelColor,
  iconColor = "green",
}) {
  return (
    <View style={{padding:8,
    margin:10,backgroundColor:bgcolor,borderColor:'white',borderWidth:1,borderRadius:15 }}>
      <TouchableOpacity style={{ justifyContent:'center',alignContent:'center',alignItems:'center' }} onPress={onPress}>
         <Text style={{fontSize:18, fontWeight:'bold',color:titelColor, alignItems:'center'}}> {QuotesTitle} </Text>
          <Text style={{fontSize:14, fontWeight:'bold', color:'#723419'}}> {Quote} </Text>  
           <Text style={{fontSize:12, fontWeight:'semibold'}}> {Reference} </Text>
           </TouchableOpacity>

          
    </View>
  );
}

const styles = StyleSheet.create({});
