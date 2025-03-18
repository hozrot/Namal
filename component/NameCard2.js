import React ,{useRef} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import ViewShot, { captureRef } from 'react-native-view-shot';
export default function NameCard2({ title,count, arabic,bangla,english,meaning,bgColor, onPress, date, iconName, iconSize, amount,category,backgroundColor='#7FC56C',
    iconColor = 'green' }) {
        const cardRef = useRef(); // Create a ref for the card
          const onShare = async () => {
            try {
              // 1. Capture the card as an image
              const uri = await captureRef(cardRef, {
                format: 'png',
                quality: 0.8, // Adjust quality as needed
              });
        
              // 2. Share the image
              await Sharing.shareAsync(uri, {
                mimeType: 'image/png',
                dialogTitle: 'Share Card',
              });
        
        
            } catch (error) {
              console.error('Error sharing card:', error);
            }
          };
    return (
        <View style={{backgroundColor:'#E9FDF1',padding:5,margin:10,borderRadius:15}}>
            <ViewShot ref={cardRef} options={{ format: 'png', quality: 0.8 }}>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#C9FADC',borderRadius:15,margin:10}}>
          <View style={{ height:220, width:220,  backgroundColor: "#E9FDF1", borderRadius: 110,justifyContent:'center',alignItems:'center' }}>
          <TouchableOpacity style={{  height:200, width:200,  backgroundColor: "#C9FADC", borderRadius: 100, justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#28Ba7D80' }}>
            <Text style={{fontSize:48,fontWeight:'bold',textAlign:'center',color:'#28Ba7D'}}> {arabic} </Text>
          </TouchableOpacity>
          </View>
          <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',color:'#009178'}}> {bangla} </Text>
          {/* <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center',padding:10}}> The Fashioner,The Organizer, the Designer   </Text> */}
         
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center',padding:2}}> {meaning} </Text>
          </View>
        </View>
        </ViewShot>

<TouchableOpacity style={{backgroundColor:'lightblue',padding:5,borderRadius:10, justifyContent:'center',alignItems:'center',flexDirection:'row' }} onPress={onShare} > 
<MaterialCommunityIcons name="share-variant" size={20} color="black" />
<Text> শেয়ার করুন </Text>
</TouchableOpacity>
</View>
    );
}



//  <ImageBackground source={require('../assets/back1.jpg')}
//          style={{flex:1,justifyContent:'center',alignItems:'center',margin:10, borderRadius:25, overflow:'hidden'}}>    
       
//         <View style={{flex:1,borderRadius:15,margin:10, }}>
//           <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',padding:10 ,color:'white'}}> আল-মুসাওয়ির	 </Text>
//           <Text style={{fontSize:64,fontWeight:'semibold',textAlign:'center',padding:30,color:'white'}}>ٱلْمُصَوِّرُ </Text>
//           <Text style={{fontSize:20,fontWeight:'semibold',textAlign:'center',padding:20,color:'white'}}>
//              যিনি সমস্ত সৃষ্টিজগত সৃজন করেছেন, তিনি পূর্ব আকৃতি ব্যতীত এগুলোকে সৃষ্টি করেছেন   </Text>
//              <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-end',padding:5,borderRadius:10}}>
//               <MaterialCommunityIcons name="share" size={36} color="white" />
//           </TouchableOpacity>
//         </View>
//         </ImageBackground>