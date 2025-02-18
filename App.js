import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import DuaCard from "./component/DuaCard";
import EventCard from "./component/EventCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NameCard from "./component/NameCard";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.Topcontainer}>
        <Text> Namal ! A practising Muslim </Text>
        <StatusBar style="auto" />
      </View>
     
       <EventCard  eventName={"Eid ul Fitr"} daysRemaining={43} eventImage={require('./assets/moon.png')} />
   

     <NameCard
            title={"Asmaul Husna"}
            count={2}
            arabic={"الرحمن"}
            english={"Ar Rahman"}
            bangla={"আর রাহমান"}
            meaning={"পরম করুণাময়, সবচেয়ে দয়ালু, কল্যাণময়"}/>

    

      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row",padding: 5, }}>
        <TouchableOpacity style={{  justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:5,backgroundColor:'tomato' }}>
        <Image source={require('./assets/pray.png')} style={{width: 50, height: 50}} />
          
          <Text style={{ fontSize:16, fontWeight:'bold'}}> Salah </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:5,backgroundColor:'tomato' }}>
        <Image source={require('./assets/kabaa.png')} style={{width: 50, height: 50}} />
          
          <Text style={{ fontSize:16, fontWeight:'bold'}}> Hazz </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:5,backgroundColor:'tomato' }}>
        <Image source={require('./assets/moon.png')} style={{width: 50, height: 50}} />
          
          <Text style={{ fontSize:16, fontWeight:'bold'}}> Shaom </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:5,backgroundColor:'tomato' }}>
        <Image source={require('./assets/iftar.png')} style={{width: 50, height: 50}} />
          
          <Text style={{ fontSize:16, fontWeight:'bold'}}> Jakat </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:5,backgroundColor:'tomato' }}>
        <Image source={require('./assets/bismillah.png')} style={{width: 50, height: 50}} />
          
          <Text style={{ fontSize:16, fontWeight:'bold'}}> Kalima </Text>
        </TouchableOpacity>
      </ScrollView>
      
      <DuaCard
           iconName={'book-open-variant'}
            iconSize={36}
            iconColor={"green"}
            title={"Dua"}
            arabic={"اللهمّ لا سهلا إلا ما جالتاهو سهلا، وأنت تجالول هازنا إذا شئت سهلا"}
            english={"Allahumma la sahla illama ja'altahu sahla, wa anta taj'aa lul hazna eja shi'ta sahla"}
            bangla={"আল্লাহুম্মা লা সাহলা ইল্লামা জা'আলতাহু সাহলা, ওয়া আন্তা তাজ'আ লুল হাজনা ইজা শী'তা সাহলা"}
            meaning={"হে আল্লাহ, আপনি যা সহজ করেন তা ছাড়া আর কোন সহজ নেই এবং আপনি চাইলে কঠিনকে সহজ করতে পারেন।"}
            reference={"Ibn Majah 1/335"}
            onPress={() => console.log("DuaCard")}
          />
     
      <View style={{justifyContent:'flex-start',padding:10,backgroundColor:'tomato',marginLeft:10,marginRight:10}}>
       <Text style={{fontSize:20,fontWeight:'bold'}} >Upcoming Event </Text>
       <View style={{flexDirection:'row',padding:5,flex:1}}>
        <View style={{ backgroundColor:'lightblue',borderRadius:35,flex:.2,height:80,padding:5,justifyContent:'center',alignItems:'center' }}>
        <Text style={{textAlign:'center',fontSize:14,fontWeight:'bold'
        }}> 15 </Text>
        <Text style={{textAlign:'center',paddingLeft:5,fontSize:16,fontWeight:'bold'
        }}>Feb </Text>
        </View>
        <View style={{ padding:15,flex:.8 }}>
        <Text style={{paddingLeft:5,fontSize:16,fontWeight:'bold'
        }}>Start of Ramadan </Text>
        <Text style={{paddingLeft:5,fontSize:14,fontWeight:'bold'}}>
          2 March  </Text>
          <Text style={{paddingLeft:5,fontSize:16,fontWeight:'condensedBold'}}>
          13 Days Remaining  </Text>
        </View> 
      </View>
      
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{ color:'blue',fontWeight:'bold'}}>View All</Text>
       </TouchableOpacity>
       </View>
      
      
        <TouchableOpacity style={{ justifyContent:'center',alignContent:'center',alignItems:'center',padding:10,margin:10,backgroundColor:'#FDE1A7',borderColor:'black',borderWidth:1,borderRadius:35 }}>
         <Text style={{fontSize:16, fontWeight:'bold'}}> Today's Qoute </Text>
          <Text> 'তোমাদের যে কোন ব্যক্তি যে কোন অন্যায় কাজ দেখবে সে যেন তা বল প্রয়োগে বাধা প্রদান করে। এভাবে সম্ভব না হলে মুখে বাধা প্রদান করবে। সম্ভব না হলে সে অন্যায়কে ঘৃণা করবে। আর অন্তরে ঘৃণা করে বাধা প্রদান করা কাজটি সবচেয়ে দুর্বল ঈমানের পরিচয়’ </Text>
          <Text style={{fontSize:12, fontWeight:'bold'}}> সহিহ বুখারী, হাদিস নং ৬০৮৬ </Text>
        </TouchableOpacity>
     
      <View style={styles.containerItem1}>
        <TouchableOpacity>
          <Text>Item 3 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerItem1}>
        <TouchableOpacity>
          <Text>Item 1 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerItem4}>
        <TouchableOpacity>
          <Text>Item 8 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerItem1}>
        <TouchableOpacity>
          <Text>Item 1 </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    padding: 5,
  },
  ItemBody: {
    flex: 0.8,
    flexDirection: "column",
    backgroundColor: "lightgreen",
  },
  ItemContent: {
    flexDirection: "row",
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  Arabic: {
    fontSize: 22,
    color: "red",
    textAlign: "center",
  },
  Bangla: {},
  English: {},
  ItemFooter: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "pink",
    justifyContent: "space-between",
    width: "100%",
  },

  containerItem1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "lightblue",
    margin: 10,
  },
  containerItem2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    backgroundColor: "lightblue",
    margin: 10,
  },
  containerItem3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 100,
    backgroundColor: "lightblue",
    margin: 10,
  },
  containerItem4: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "lightblue",
    margin: 10,
  },
});
