import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
export default function DuaCard({ bgcolor, title,image, imageBack,arabic,bangla,english,meaning,reference, onPress, date, iconName, iconSize, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
    return (
       <View style={{flex: 1,
        backgroundColor: bgcolor,
        margin: 10,
        borderRadius: 15,
        overflow:'hidden',
      
        borderWidth: 2,
        borderColor: "black",}}>
                <ImageBackground  source={imageBack} style={{width: 'auto', height:'auto'}} resizeMode='contain'>
                {/* <BlurView intensity={100}> */}
               <View style={styles.header}>
              <Image
                 source={image}
                 style={{ width: 40, height: 40,borderRadius:5 }}
                 
               />
                 <View style={{ flex: 1, paddingLeft: 20 }}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}> {title} </Text>
                   <Text style={{fontSize:16,fontWeight:'semibold'}}> {reference} </Text>
                 </View>
                 {/* <TouchableOpacity>
                     <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                 </TouchableOpacity> */}
                
               </View>
               <TouchableOpacity style={styles.ItemBody} onPress={onPress}>
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
                   <Text style={styles.Bangla}>
                    {bangla}
                   </Text>
                 </View>
       
                 <View style={styles.ItemContent}>
                  <Text style={styles.Meaning}> {meaning}</Text>
                 </View>
               </TouchableOpacity>
               {/* <View style={styles.ItemFooter}>
                <TouchableOpacity>
                <Text> Details.. </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={onPress}>
                <Text> More. </Text>
                    <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
                </TouchableOpacity>


               </View> */}
{/* </BlurView> */}
</ImageBackground>
             </View>
             
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
       
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
      Bangla: {fontSize: 16,
        color: "black",
        textAlign: "center",
        fontWeight:'bold'},
        Meaning: {fontSize: 14,
          color: "black",
          textAlign: "center",
          fontWeight:'bold'},
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