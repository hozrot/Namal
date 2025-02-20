import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventCard from './EventCard';
export default function RamadanTime({ sunrise,sunset, iftar,sahri,english }) {
    return (
        <View style={{ flexDirection: "row" , justifyContent:'center',alignItems:'center',padding:10 ,backgroundColor:'lightblue'}}> 
               <View style={{ justifyContent:'space-around',flex:.3 }}>
               <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/sunrise.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text> Sunrise</Text>
                 <Text> {sunrise}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/sunset.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text> Sunset</Text>
                 <Text> {sunset}</Text>
                </View>
                 </View>
                 <View style={{ flex:.7, justifyContent:'space-around' }}>
                 {/* <EventCard  eventName={"Eid ul Fitr"} daysRemaining={43} eventImage={require('../assets/moon.png')} /> */}

                 <Text style={{textAlign:'center',paddingBottom:20,fontWeight:'bold'}}> 11 Ramadan 1446 Hijri </Text>

                 <View style={{ flexDirection: "row", justifyContent:'space-evenly',alignItems:'center',paddingBottom:10 }}>
                 <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/iftar1.png')}
                        style={{ width: 50, height: 50 }}
                      />
                 <Text> Sahri Ends </Text>
                 <Text> {sahri}</Text>
                </View>
                
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/eat.png')}
                        style={{ width: 50, height: 50 }}
                      />
                 <Text> Eftar Start </Text>
                 <Text> {iftar}</Text>
                </View>
                </View>
                 <View style={{ flexDirection: "row",paddingBottom:10,justifyContent:'space-around',width:'100%' }}> 
               
                
               
                    </View>
                
                 
                 </View>
               </View>
    );
}

