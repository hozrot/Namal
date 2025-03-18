import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function QuoteCard({
    QuotesTitle,
  Quote,
  Reference,
  bgcolor="red",
}) {
  return (
    <TouchableOpacity style={{ justifyContent:'center',alignContent:'center',alignItems:'center',padding:8,
    margin:10,backgroundColor:bgcolor,borderColor:'black',borderWidth:1,borderRadius:15 }}>
         <Text style={{fontSize:18, fontWeight:'bold',color:'green', alignItems:'center'}}> {QuotesTitle} </Text>
          <Text style={{fontSize:14, fontWeight:'bold', color:'#723419'}}> {Quote} </Text>  
           <Text style={{fontSize:12, fontWeight:'semibold'}}> {Reference} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
