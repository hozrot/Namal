import React,{useRef} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity,SafeAreaView,FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import asmaulHusna from "../Database/Name";
import PagerView from 'react-native-pager-view';
//const { width } = Dimensions.get('window');


export default function AsmaulHusna({onPress,bangla}) {

    const pagerRef = useRef(null);
    return (
       
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
          {asmaulHusna.map((item) => (
        <View key={item.id}>
          <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#C9FADC",
                      borderRadius: 15,
                      margin: 5,
                    }}
                  >
                    <View
                      style={{
                        height: 220,
                        width: 220,
                        backgroundColor: "#E9FDF1",
                        borderRadius: 110,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: 200,
                          width: 200,
                          backgroundColor: "#C9FADC",
                          borderRadius: 100,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#28Ba7D80",
                        }} onPress={onPress}
                      >
                        <Text
                          style={{
                            fontSize: 48,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#28Ba7D",
                          }}
                        >
                          {" "}
                          {item.arabic}{" "}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#009178",
                      }}
                    >
                      {" "}
                      {item.bangla}{" "}
                    </Text>
                    {/* <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center',padding:10}}> The Fashioner,The Organizer, the Designer   </Text> */}
          
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          textAlign: "center",
                          padding: 2,
                        }}
                      >
                        {" "}
                        {item.meaning}{" "}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "semibold",
                          textAlign: "center",
                          padding: 2,
                        }}
                      >
                        {" "}
                        {item.details}{" "}
                      </Text>
                    </View>
          </View>
        </View>
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
