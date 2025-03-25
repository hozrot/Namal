import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import DuaCard from '../component/DuaCard';
import { duaByPhophet } from '../Database/DuaByProphet';


export default function DuaByProphetList() {
 
  return (
 <View style={{flex:1,backgroundColor:'indigo'}}>
     
      <FlatList
        data={duaByPhophet}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

         <DuaCard
        title={item.title}
        arabic={item.arabic}
        bangla={item.bangla}
        meaning={item.meaning}
        reference={item.reference}
       image={item.image}
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