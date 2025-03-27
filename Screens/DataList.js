import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import DuaCard from '../component/DuaCard';
import zikrs from '../Database/Zikir';
import { dualist } from '../Database/Dua';


export default function DataList() {
 
  return (
 <View style={{flex:1,backgroundColor:'indigo'}}>
     
      <FlatList
        data={dualist}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

         <DuaCard
         image={require("../assets/dua.png")}
         title={item.title}
        arabic={item.arabic}
        bangla={item.bangla}
        meaning={item.meaning}
        reference={item.reference}
        bgcolor={"#BfF9E6"}
       
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