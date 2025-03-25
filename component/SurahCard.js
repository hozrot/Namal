import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function SurahCard({ serial,name,aya,menuImage, title, arabic,bangla,english,meaning,reference, onPress, date, iconName, iconSize=12, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
    return (
       <TouchableOpacity style={styles.card} onPress={onPress} >
         <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'thistle',borderRadius:15,margin:10,padding:10}}>
              <View style={{padding:3,textAlign:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#D396FF',borderRadius:35,borderWidth:1,borderColor:'white',flexDirection:'row'}}>
                <Text  style={{ fontSize:20,color:'black',textAlign:'center',fontWeight:'bold'}}> {serial} </Text>
                <Image
                          source={menuImage}
                          style={{ width: 40, height: 40 ,borderRadius:35,resizeMode:'contain' }}
                        />
                </View>
                
                 {/* <Text style={{fontSize:16 , fontWeight:'bold'}} >  সূরা পরিচিতি </Text> */}
                 
             <View style={{flex:1,flexDirection:"row"}}>
                   <View style={{flex:.4,justifyContent:'center'}}>
                   {/* <Text style={{fontSize:24}}>Ar-Rahman </Text> */}
                   <Text style={{fontSize:20 , fontWeight:'bold'}}> {bangla}  </Text>
                   <Text style={{fontSize:16}}> {meaning}   </Text>
                    </View>
                    <View style={{flex:.6,textAlign:'center',justifyContent:'center',alignItems:'center'}}>
                  
                   
                   <Text style={{fontSize:42,color:'red',textAlign:'center'}}> {arabic} </Text>
                   <Text style={{fontSize:14,textAlign:'center'}}>  আয়াত সংখ্যাঃ {aya} , {reference}  </Text>
                   
                    </View>
                </View>
            </View>
             </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   
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