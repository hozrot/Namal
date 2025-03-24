import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import DuaCard from '../component/DuaCard';
import { duaByPhophet } from '../Database/DuaByProphet';


export default function DuaByProphetList() {
 
  return (
 <View style={{flex:1,backgroundColor:'#E9FDF1'}}>
     
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
        bgcolor={"skyblue"}
        image={require("../assets/islam2.png")}/>
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