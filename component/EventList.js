import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function EventList({
  month,
  listName,
  day,
  daysRemaining,
  eventName,
  onPress,
  bgColor,
}) {
  return (
    <View style={{justifyContent:'flex-start',padding:10,backgroundColor:'tomato',marginLeft:10,marginRight:10}}>
       <Text style={{fontSize:20,fontWeight:'bold'}} >{listName} </Text>
       <View style={{flexDirection:'row',padding:5,flex:1}}>
        <View style={{ backgroundColor:'lightblue',borderRadius:35,flex:.2,height:80,padding:5,justifyContent:'center',alignItems:'center' }}>
        <Text style={{textAlign:'center',fontSize:14,fontWeight:'bold'
        }}> {day} </Text>
        <Text style={{textAlign:'center',paddingLeft:5,fontSize:16,fontWeight:'bold'
        }}>{month} </Text>
        </View>
        <View style={{ padding:15,flex:.8 }}>
        <Text style={{paddingLeft:5,fontSize:16,fontWeight:'bold'
        }}>{eventName} </Text>
        {/* <Text style={{paddingLeft:5,fontSize:14,fontWeight:'bold'}}>
          2 March  </Text> */}
          <Text style={{paddingLeft:5,fontSize:16,fontWeight:'condensedBold'}}>
          {daysRemaining} Days Remaining  </Text>
        </View> 
      </View>
      
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={onPress}>
          <Text style={{ color:'blue',fontWeight:'bold'}}>View All</Text>
       </TouchableOpacity>
       </View>
  );
}

const styles = StyleSheet.create({});
