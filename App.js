import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";
import DuaCard from "./component/DuaCard";
import EventCard from "./component/EventCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NameCard from "./component/NameCard";
import MenuCard from "./component/MenuCard";
import EventList from "./component/EventList";
import QuoteCard from "./component/QuoteCard";
import TodayCard from "./component/TodayCard";
import RamadanTime from "./component/RamadanTime";
import SalahTime from "./component/SalahTime";
import MenuCard2 from "./component/ManuCard2";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#E7FAE7" }}>
      <View style={styles.Topcontainer}>
        <Text> Namal ! A practising Muslim </Text>
        <StatusBar style="auto" />
      </View>
     
       <EventCard  eventName={"Eid ul Fitr"} daysRemaining={43} eventImage={require('./assets/moon.png')} />
   

     <NameCard
            title={"আসমাউল হুসনা"}
            count={"২"}
            arabic={"الرحمن"}
            // english={"Ar Rahman"}
            bangla={"আর রাহমান"}
            meaning={"পরম করুণাময়, সবচেয়ে দয়ালু, কল্যাণময়"}/>
<Text style={{fontSize:16 , fontWeight:'bold', paddingLeft:10}}> Five Pillar of Islam </Text>
    

      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row" }}>
        <MenuCard 
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
        <MenuCard
        menuImage={require('./assets/kabaa.png')}
        menuName={"Hajj"}
        />
        <MenuCard
        menuImage={require('./assets/alms.png')}
        menuName={"Zakat"}
        />
        <MenuCard
        menuImage={require('./assets/bismillah.png')}
        menuName={"Iman"}
        />
        <MenuCard
        menuImage={require('./assets/iftar.png')}
        menuName={"Siam"}
        />
       
        
      </ScrollView>
      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", backgroundColor:'#5B88CB', }}>
        <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
         <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
         <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
         <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
         <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
         <MenuCard2
        menuImage={require('./assets/pray.png')}
        menuName={"Salah"}
        />
       
        
      </ScrollView>

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}> আল-কুরআন </Text>
        <Text style={{fontSize:16,fontWeight:'bold'}}> হাদিস </Text>
      </View>
      
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
     
     <EventList listName={"Upcoming Event" } eventName={"Eid ul Fitr"} daysRemaining={43} day={5} month={"April"} />
      
     <QuoteCard QuotesTitle={"Todays Hadith"} 
                Quote={" তোমাদের যে কোন ব্যক্তি যে কোন অন্যায় কাজ দেখবে সে যেন তা বল প্রয়োগে বাধা প্রদান করে। এভাবে সম্ভব না হলে মুখে বাধা প্রদান করবে। সম্ভব না হলে সে অন্যায়কে ঘৃণা করবে। আর অন্তরে ঘৃণা করে বাধা প্রদান করা কাজটি সবচেয়ে দুর্বল ঈমানের পরিচয় "}
                Reference={"সহিহ বুখারী, হাদিস নং ৬০৮৬"} />
                
     
        <TodayCard
          sunrise={"6:05 AM"}
          sunset={"6:05 PM"}
          english={"Friday, 21 February 2025"}
          arabic={"20 Shaban 1446 Hijri"}
          bangla={"শুক্রবার, ১২ ফাল্গুন, ১৪৩১ বঙ্গাব্দ"}
        />

        <RamadanTime
        sunrise={"6:05 AM"}
        sunset={"6:05 PM"}
          iftar={"5:50 PM"}
          sahri={"5:15 AM"}/>

    
      
    <View style={{margin:10, backgroundColor:'#C9FADC',borderRadius:15,padding:5}}>
      <SalahTime
        image={require("./assets/day-and-night.png")}
        name={"Fajar"}
        time={"5:30 AM"}
        willEndIn={"1h 35m"}
      />
      <SalahTime
        image={require("./assets/rising-sun.png")}
        name={"Dhuhar"}
        time={"5:30 AM"}
        willEndIn={"1h 35m"}
      />
      <SalahTime
        image={require("./assets/desert.png")}
        name={"Asar"}
        time={"5:30 AM"}
        willEndIn={"1h 35m"}
      />
      <SalahTime
        image={require("./assets/day-and-night2.png")}
        name={"Magrib"}
        time={"5:30 AM"}
        willEndIn={"1h 35m"}
      />
      <SalahTime
        image={require("./assets/half-moon.png")}
        name={"Isha"}
        time={"5:30 AM"}
        willEndIn={"1h 35m"}
      />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#C9FADC',borderRadius:15,margin:10,padding:15}}>
          <View style={{ height:220, width:220,  backgroundColor: "#E9FDF1", borderRadius: 110,justifyContent:'center',alignItems:'center' }}>
          <View style={{  height:200, width:200,  backgroundColor: "#C9FADC", borderRadius: 100, justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#28Ba7D80' }}>
            <Text style={{fontSize:48,fontWeight:'bold',textAlign:'center',color:'#28Ba7D'}}> ٱلْمُصَوِّرُ </Text>
          </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',color:'#009178'}}> আল-মুসাওয়ির	 </Text>
          {/* <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center',padding:10}}> The Fashioner,The Organizer, the Designer   </Text> */}
         
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center',padding:2}}> যিনি সমস্ত সৃষ্টিজগত সৃজন করেছেন, তিনি পূর্ব আকৃতি ব্যতীত এগুলোকে সৃষ্টি করেছেন   </Text>
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'#C9FADC',padding:5,borderRadius:10}}> 
            <Text> {"<<"} 1 of 99  {">>"} </Text>
          </View> */}
        </View>
      {/* <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row" }}>
     
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ height:220, width:220,  backgroundColor: "#E9FDF1", borderRadius: 110,justifyContent:'center',alignItems:'center' }}>
          <View style={{  height:180, width:180,  backgroundColor: "#C9FADC", borderRadius: 90, justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#28Ba7D80' }}>
            <Text style={{fontSize:44,fontWeight:'bold',textAlign:'center',color:'#28Ba7D'}}> NAme </Text>
          </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',color:'#009178'}}> English </Text>
          <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center'}}> the full meaning is there  </Text>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', paddingTop:25}}> 
            <Text> {"<<"} 1 of 99  {">>"} </Text>
          </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ height:220, width:220,  backgroundColor: "#E9FDF1", borderRadius: 110,justifyContent:'center',alignItems:'center' }}>
          <View style={{  height:180, width:180,  backgroundColor: "#C9FADC", borderRadius: 90, justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#28Ba7D80' }}>
            <Text style={{fontSize:44,fontWeight:'bold',textAlign:'center',color:'#28Ba7D'}}> NAme </Text>
          </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',color:'#009178'}}> English </Text>
          <Text style={{fontSize:18,fontWeight:'semibold',textAlign:'center'}}> the full meaning is there  </Text>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', paddingTop:25}}> 
            <Text> {"<<"} 1 of 99  {">>"} </Text>
          </View>
        </View>
       </ScrollView> */}
     
        <TouchableOpacity style={{flex:1,flexDirection:"row",borderRadius:15, backgroundColor:'#DBD8D4',alignItems:'center',justifyContent:'center',margin:10}}>
           <View style={{flex:.6,padding:10}}>
           {/* <Text style={{fontSize:24}}>Ar-Rahman </Text> */}
           <Text style={{fontSize:24 , fontWeight:'bold'}}>আর রাহমান </Text>
           <Text style={{fontSize:16}}>পরম করুণাময়, সবচেয়ে দয়ালু, কল্যাণময়  </Text>
            </View>
            <View style={{flex:.4,textAlign:'center',justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:42,color:'red',textAlign:'center'}}> الرحمن </Text>
            </View>
        </TouchableOpacity>
        <View style={{flex:1,borderRadius:15, backgroundColor:'#FFFBCC',alignItems:'center',justifyContent:'center',margin:10}}>
          <View style={{flex:.2,paddingBottom:20}}>
          <Text style={{fontSize:24 ,color:'green', fontWeight:'bold',paddingTop:20}}> ঘুম থেকে উঠার পর দুআ  </Text>
          </View>
          <View style={{flex:.4,justifyContent:'center',alignItems:'center',padding:5}}>
          <Text style={{fontSize:30 , color:'#723419',textAlign:'center',fontWeight:'bold'}}>الحمدُ لله الذي أحيَانَا بَعْدَ مَا أماتَنَا وإليه النُّشُوْر </Text>
          </View>
          <View style={{flex:.2,padding:5, width:'100%',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20 , color:'#723419',textAlign:'center',}}> ‘আলহামদুলিল্লা হিল্লাজি আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশুর’ </Text>
          </View>
          <View style={{flex:.2,padding:10,borderBottomWidth:1,borderBottomColor:'green',width:'85%',justifyContent:'center',alignItems:'center'}}>
          {/* <Text style={{fontSize:20 , color:'#723419',textAlign:'center',paddingBottom:15,}}> ‘আলহামদুলিল্লা হিল্লাজি আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশুর’ </Text> */}
          </View>
          <View style={{flex:.2,padding:5}}>
          <Text style={{fontSize:18 , color:'#6F7947',textAlign:'center',fontWeight:'500'}}> অর্থ : সমস্ত প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত করার পর পুনরায় জীবিত করেছেন। আর তার দিকেই সবার পুনরুত্থান।  </Text>
          </View>
          <View style={{flex:.2,padding:5,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={{fontSize:14 , color:'#6F7947',fontWeight:'bold'}}> (বুখারি, হাদিস : ৬৩২৪) </Text>
          <Text style={{fontSize:14 , color:'#6F7947',fontWeight:'bold'}}> (মুসলিম, হাদিস : ২৭১১) </Text>
          </View>
          <View style={{flex:.2,padding:10,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24 , color:'#6F7947'}}> ___ </Text>
          </View>
        </View>

        <ImageBackground source={require('./assets/back1.jpg')}
         style={{flex:1,justifyContent:'center',alignItems:'center',margin:10, borderRadius:25, overflow:'hidden'}}>    
       
        <View style={{flex:1,borderRadius:15,margin:10, }}>
          <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',padding:10 ,color:'white'}}> আল-মুসাওয়ির	 </Text>
          <Text style={{fontSize:64,fontWeight:'semibold',textAlign:'center',padding:30,color:'white'}}>ٱلْمُصَوِّرُ </Text>
          <Text style={{fontSize:20,fontWeight:'semibold',textAlign:'center',padding:20,color:'white'}}>
             যিনি সমস্ত সৃষ্টিজগত সৃজন করেছেন, তিনি পূর্ব আকৃতি ব্যতীত এগুলোকে সৃষ্টি করেছেন   </Text>
             <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-end',padding:5,borderRadius:10}}>
              <MaterialCommunityIcons name="share" size={36} color="white" />
          </TouchableOpacity>
        </View>
        </ImageBackground>
       
      
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
