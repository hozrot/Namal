import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function QuoteCard({
    QuotesTitle,
  Quote,
  Reference,
}) {
  return (
    <TouchableOpacity style={{ justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:10,backgroundColor:'#FDE1A7',borderColor:'black',borderWidth:1,borderRadius:35 }}>
         <Text style={{fontSize:16, fontWeight:'bold'}}> {QuotesTitle} </Text>
          <Text> {Quote} </Text>   <Text style={{fontSize:12, fontWeight:'bold'}}> {Reference} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
