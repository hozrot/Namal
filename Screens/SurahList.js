import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';

import surahs from '../Database/Surah';
import asmaulHusna from '../Database/Name';
import surahList from '../Database/Surah';
import SurahCard from '../component/SurahCard';

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

          <SurahCard 
                  serial={item.id}
                  arabic={item.arabic}
                  bangla={item.bangla}
                  meaning={item.meaning}
                  reference={item.meccan ? 'মক্কী ' : 'মাদীনি'}
                  aya={convertToBanglaNumber(item.ayah)}
                  menuImage={item.meccan ? require('../assets/mecca.png') :require('../assets/madina.png')}
                  />
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