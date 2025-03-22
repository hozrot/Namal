import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function DuaCard2({ title, arabic,bangla,english,meaning,reference, onPress, date, iconName, iconSize, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
    return (
       <TouchableOpacity onPress={onPress}>
              <View style={{flex:1,borderRadius:15, backgroundColor:'#FFFBCC',alignItems:'center',justifyContent:'center',margin:10}}>
                        <View style={{flex:.2,paddingBottom:20}}>
                        <Text style={{fontSize:24 ,color:'green', fontWeight:'bold',paddingTop:20}}> {title} </Text>
                        </View>
                        <View style={{flex:.4,justifyContent:'center',alignItems:'center',padding:5}}>
                        <Text style={{fontSize:30 , color:'#723419',textAlign:'center',fontWeight:'bold'}}>{arabic} </Text>
                        </View>
                        <View style={{flex:.2,padding:5, width:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20 , color:'#723419',textAlign:'center',}}> {bangla} </Text>
                        </View>
                        <View style={{flex:.2,padding:10,borderBottomWidth:1,borderBottomColor:'green',width:'85%',justifyContent:'center',alignItems:'center'}}>
                        {/* <Text style={{fontSize:20 , color:'#723419',textAlign:'center',paddingBottom:15,}}> ‘আলহামদুলিল্লা হিল্লাজি আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশুর’ </Text> */}
                        </View>
                        <View style={{flex:.2,padding:5}}>
                        <Text style={{fontSize:18 , color:'#6F7947',textAlign:'center',fontWeight:'500'}}> {meaning} </Text>
                        </View>
                        <View style={{flex:.2,padding:5,width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:14 , color:'#6F7947',fontWeight:'bold'}}> {reference}</Text>
                        </View>
                        <View style={{flex:.2,padding:10,width:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:24 , color:'#6F7947'}}> ___ </Text>
                        </View>
                      </View>
             </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        
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
       
      },
      ItemContent: {
        flexDirection: "row",
        
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      },
      Arabic: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        fontWeight:'bold'
      },
      Bangla: {},
      English: {},
      ItemFooter: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-between",
        width: "100%",
        borderRadius:15,
        borderWidth:2
      },

})