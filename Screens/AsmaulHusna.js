import React,{useRef} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity,SafeAreaView,FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import asmaulHusna from "../Database/Name";
import PagerView from 'react-native-pager-view';
import NameCard2 from "../component/NameCard2";
//const { width } = Dimensions.get('window');


export default function AsmaulHusna({onPress,bangla}) {

    const pagerRef = useRef(null);
    return (
       
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
          {asmaulHusna.map((item) => (
        <NameCard2
        key={item.id}
        title={item.title}
        bangla={item.bangla}
        arabic={item.arabic}
        meaning={item.meaning}
        />
      ))}
          </PagerView>
        
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 5,
        margin: 10,
        borderRadius: 15,
        

      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
