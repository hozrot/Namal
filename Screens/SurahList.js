import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';

import surahs from '../Database/Surah';
import asmaulHusna from '../Database/Name';
import surahList from '../Database/Surah';

function convertToBanglaNumber(number) {
  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number.toString().split("").map(digit => banglaNumbers[parseInt(digit)]).join("");
} 

export default function SurahList() {
 
  return (
 <View style={{flex:1,backgroundColor:'#E9FDF1'}}>
     
      <FlatList
        data={surahs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#DBD8D4',borderRadius:15,margin:10,padding:10}}>
            <View style={{padding:5,textAlign:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#7FCEAA',borderRadius:35,borderWidth:1,borderColor:'white'}}>
              <Text  style={{ fontSize:14,color:'black',padding:5,textAlign:'center'}}> {item.id} </Text>
              </View>
               {/* <Text style={{fontSize:16 , fontWeight:'bold'}} >  সূরা পরিচিতি </Text> */}
               
           <TouchableOpacity style={{flex:1,flexDirection:"row"}}>
                 <View style={{flex:.4,justifyContent:'center',alignItems:'flex-end'}}>
                 {/* <Text style={{fontSize:24}}>Ar-Rahman </Text> */}
                 <Text style={{fontSize:18 , fontWeight:'bold'}}> {item.bangla}  </Text>
                 <Text style={{fontSize:16}}> {item.meaning}   </Text>
                  </View>
                  <View style={{flex:.6,textAlign:'center',justifyContent:'center',alignItems:'center'}}>
                
                 
                 <Text style={{fontSize:42,color:'red',textAlign:'center'}}> {item.arabic} </Text>
                 <Text style={{fontSize:14,textAlign:'center'}}>  আয়াতঃ {convertToBanglaNumber(item.ayah)},  {item.meccan ? 'মক্কী ' : 'মাদীনি'} </Text>
                  </View>
              </TouchableOpacity>
          </View>
        )}
      />
     
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});