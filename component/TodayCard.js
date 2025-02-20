import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventCard from './EventCard';
export default function TodayCard({ sunrise,sunset, arabic,bangla,english }) {
    return (
        <View style={{ flexDirection: "row" , justifyContent:'center',alignItems:'center',padding:10 ,backgroundColor:'tomato'}}> 
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
                 <View style={{ flex:.7 ,justifyContent:'center',alignItems:'center' }}>
                 <EventCard  eventName={"Eid ul Fitr"} daysRemaining={43} eventImage={require('../assets/moon.png')} />
                 <View style={{ flexDirection: "row", justifyContent:'center',alignItems:'center',paddingBottom:10 }}> 
                   <View style={{ flex:.15 }}>
                 <Image
                        source={require('../assets/clock.png')}
                        style={{ width: 25, height: 25 }}
                      />
                       </View>
                       <View style={{ flex:.85 }}>
                              <Text> {english} </Text>
                              </View>
                    </View>
                 <View style={{ flexDirection: "row", justifyContent:'center',alignItems:'center',paddingBottom:10 }}> 
                   <View style={{ flex:.15}}>
                 <Image
                        source={require('../assets/stopwatch.png')}
                        style={{ width: 25, height: 25 }}
                      />
                       </View>
                       <View style={{ flex:.85 }}>
                              <Text> {arabic} </Text>
                              </View>
                    </View>
                 <View style={{ flexDirection: "row", justifyContent:'center',alignItems:'center' }}> 
                   <View style={{ flex:.15}}>
                 <Image
                        source={require('../assets/stopwatch2.png')}
                        style={{ width: 25, height: 25 }}
                      />
                       </View>
                       <View style={{ flex:.85 }}>
                              <Text style={{fontSize:14}}> {bangla}</Text>
                              </View>
                    </View>
                 <View style={{ flexDirection: "row",paddingBottom:10,justifyContent:'space-around',width:'100%' }}> 
               
                
               
                    </View>
                
                 
                 </View>
               </View>
    );
}

