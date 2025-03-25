import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import DuaCard from '../component/DuaCard';
import zikrs from '../Database/Zikir';


export default function ZikirList() {
 
  return (
 <View style={{flex:1,backgroundColor:'indigo'}}>
     
      <FlatList
        data={zikrs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

         <DuaCard
         image={require("../assets/beads.png")}
         title={" জিকির "}
        arabic={item.arabic}
        bangla={item.bangla}
        meaning={item.meaning}
        reference={item.reference}
       
       />
        )}
      />
     
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9FDF1',
    padding: 8,
  },
 
  title: {
    fontSize: 32,
  },
});