import React ,{useRef} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity,Share,ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventCard from './EventCard';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import ViewShot, { captureRef } from 'react-native-view-shot';

export default function RamadanTime({ sunrise,sunset, iftar,sahri,english,fajar,dhuhar,asar,magrib,esha,morning,noon,afternoon }) {

  const cardRef = useRef(); // Create a ref for the card

  const onShare = async () => {
    try {
      // 1. Capture the card as an image
      const uri = await captureRef(cardRef, {
        format: 'png',
        quality: 0.8, // Adjust quality as needed
      });

      // 2. Share the image
      await Sharing.shareAsync(uri, {
        mimeType: 'image/png',
        dialogTitle: 'Share Card',
      });


    } catch (error) {
      console.error('Error sharing card:', error);
    }
  };
    return (

      <View style={{ backgroundColor:'#58A8D7',margin:10,borderRadius:15,overflow:'hidden'}}> 

<ViewShot ref={cardRef} options={{ format: 'png', quality: 0.8 }}>
     
      {/* <ImageBackground source={require('../assets/back1.jpg')}> */}
        <View style={{ backgroundColor:'#58A8D7', justifyContent:'center',alignItems:'center',padding:5,margin:10,borderRadius:15}}> 
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:24,paddingBottom:10}}>  আজ সোমবার </Text>
        {/* <Text style={{textAlign:'center',paddingBottom:5,fontWeight:'bold',fontSize:16}}>  সাপ্তাহিক রোজার দিন  </Text> */}
               <View style={{ flex:1,flexDirection: "row" , justifyContent:'center',alignItems:'center'}}> 
               <View style={{ justifyContent:'space-around',flex:.3 }}>
                <Text style={{textAlign:'center',paddingBottom:10,fontWeight:'bold'}}> ফরয নামায  </Text>
               <View style={{ justifyContent:'center',alignItems:'center' }}>
               <Text> ফযর </Text>
                <Image
                        source={require('../assets/day-and-night.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {fajar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text> যোহর </Text>
                <Image
                        source={require('../assets/sun3.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {dhuhar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text> আসর</Text>
                <Image
                        source={require('../assets/desert.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {asar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text> মাগরিব</Text>
                <Image
                        source={require('../assets/day-and-night2.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {magrib}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text>এশা </Text>
                <Image
                        source={require('../assets/half-moon.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {esha}</Text>
                </View>
              </View>
                 <View style={{ flex:.7, justifyContent:'space-around' }}>
                 {/* <EventCard  eventName={"Eid ul Fitr"} daysRemaining={43} eventImage={require('../assets/moon.png')} /> */}
                 <View style={{ flexDirection:'row', justifyContent:'center',paddingBottom:5  }}>
                 <View style={{ flex:.33,justifyContent:'center',alignItems:'center' }}>
                 <Text style={{textAlign:'center',fontWeight:'bold'}}>  ২ {'\n'} মার্চ {'\n'} ২০২৫  {'\n'} </Text>
                 </View>
                 <View style={{ flex:.33,justifyContent:'center',alignItems:'center' }}>
                 <Text style={{textAlign:'center',fontWeight:'bold'}}> ২৬ {'\n'} ফাল্গুন {'\n'}   ১৪৩১  {'\n'}  </Text>
                 </View>
                 <View style={{ flex:.33,justifyContent:'center',alignItems:'center' }}>
                 <Text style={{textAlign:'center',fontWeight:'bold'}}> ১ {'\n'}রমজান{'\n'} ১৪৪৬  {'\n'}  </Text>
                 </View>
                  </View>
                 
                 <View style={{ flexDirection: "row", justifyContent:'space-evenly',alignItems:'center',paddingBottom:5 }}>
                 <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/iftar.png')}
                        style={{ width: 50, height: 50 }}
                      />
                 <Text> সাহরী শেষ  </Text>
                 <Text> {sahri}</Text>
                </View>
                
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/eat.png')}
                        style={{ width: 50, height: 50 }}
                      />
                 <Text> ইফতার শুরু </Text>
                 <Text> {iftar}</Text>
                </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around',flex:.3,paddingBottom:10 }}>
               <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/sunrise.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text> সুর্যোদয় </Text>
                 <Text> {sunrise}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                        source={require('../assets/sunset.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text> সুর্যাস্ত</Text>
                 <Text> {sunset}</Text>
                </View>
                 </View>
                 <View style={{ alignContent:'center',alignItems:'center',justifyContent:'center',width:'100%',borderWidth:1,borderColor:'red',borderRadius:15}}> 
               
               <Text style={{fontSize:16,fontWeight:'bold',padding:10}}> নামাযের নিষিদ্ধ সময়</Text>
              
                  
                <View style={{flexDirection:'row', justifyContent:'space-around',flex:.3 }}>
                <View style={{ flexDirection:'row', justifyContent:'center',alignItems:'center',flex:1,textAlign:'center' }}>
               <View style={{ justifyContent:'center',alignItems:'center',flex:.33 }}>
                <Image
                        source={require('../assets/no-sun.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text style={{textAlign:'center'}}>  সকাল  </Text>
                 <Text> {morning}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center',flex:.33 }}>
                <Image
                        source={require('../assets/no-sun2.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text style={{textAlign:'center'}}> দুপুর </Text>
                 <Text> {noon}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center',flex:.33 }}>
                <Image
                        source={require('../assets/warning.png')}
                        style={{ width: 30, height: 30 }}
                      />
                 <Text style={{textAlign:'center'}}> বিকাল </Text>
                 <Text> {afternoon}</Text>
                </View>
                </View>
                 </View>
                 </View>
                 </View>
               </View>
               
               <View style={{ padding:1}}>
                <View>
                <Text style={{textAlign:'center',fontWeight:'bold'}}> নফল নামায   </Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:'space-between',alignItems:'center',padding:5,width:'100%' }}> 
               <View style={{ justifyContent:'center',alignItems:'center' }}>
               <Text> তাহাজ্জুদ </Text>
                <Image
                        source={require('../assets/salah.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {fajar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text>ইশরাক </Text>
                <Image
                        source={require('../assets/sun.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {dhuhar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text> চাশত</Text>
                <Image
                        source={require('../assets/weather.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {asar}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text> যাওয়াল</Text>
                <Image
                        source={require('../assets/dawn.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {magrib}</Text>
                </View>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text>আওয়াবিন </Text>
                <Image
                        source={require('../assets/cloudy.png')}
                        style={{ width: 30, height: 30 }}
                      />
                
                 <Text> {esha}</Text>
                </View>
                </View>
                </View>
                </View>
                {/* </ImageBackground> */}
                </ViewShot>
                <TouchableOpacity style={{backgroundColor:'lightblue',padding:5,borderRadius:10, justifyContent:'center',alignItems:'center',flexDirection:'row' }} onPress={onShare}> 
                <MaterialCommunityIcons name="share-variant" size={20} color="black" />
                <Text> শেয়ার করুন </Text>
                </TouchableOpacity>
              
       

        </View>
    );
}

