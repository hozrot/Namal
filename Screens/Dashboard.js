import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button
} from "react-native";
import DuaCard from "../component/DuaCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QuoteCard from "../component/QuoteCard";
import MenuCard2 from "../component/ManuCard2";
import NameCard2 from "../component/NameCard2";
import DirectionCard from "../component/DirectionCard";
import DuaCard2 from "../component/DuaCard2";
import SurahCard from "../component/SurahCard";


export default function Dashboard() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#7FCEAA" }}>
      <View style={styles.Topcontainer}>
        <Text style = {{fontSize: 18, fontWeight: 'bold', color: 'Black'}}
        > Namal ! A practising Muslim </Text>
        <StatusBar style="auto" />
      </View>
     
      
      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", backgroundColor:'#39A57D',margin:5,borderRadius:15 }}>
        <MenuCard2
        menuImage={require('../assets/pray.png')}
        menuName={"নামায"}
        />
         <MenuCard2
        menuImage={require('../assets/kabaa.png')}
        menuName={"হজ্জ"}
        />
         <MenuCard2
        menuImage={require('../assets/alms.png')}
        menuName={"যাকাত"}
        />
         <MenuCard2
        menuImage={require('../assets/bismillah.png')}
        menuName={"ঈমান"}
        />
         <MenuCard2
        menuImage={require('../assets/iftar.png')}
        menuName={"সাওম"}
        />        
      </ScrollView>
      
      <View style={{flexDirection:'row',
       backgroundColor:'#40CC83',borderRadius:35,margin:10}}>

        
        <View style={{flex:.15,padding:10,textAlign:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#7FCEAA',borderRadius:35,borderWidth:1,borderColor:'white'}}>
        <Text  style={{ fontSize:14,color:'white',padding:5,textAlign:'center'}}> 25 {"\n"}Feb</Text>
        </View>
        <View style={{flex:.3,justifyContent:'space-around'}}>
        <Text style={{ fontSize:14,color:'white',padding:5,textAlign:'center'}}> Monday {"\n"} 05 Ramadan </Text>
       </View>

        <View style={{flex:.3,justifyContent:'space-around'}}>
        <Text style={{ fontSize:14,color:'white',padding:5,textAlign:'center'}}> Sahri Ends {"\n"} 5:05 AM </Text>
       </View>
       <View style={{flex:.3,justifyContent:'space-around'}}>
       <Text style={{ fontSize:14,color:'white',padding:5,textAlign:'center'}}> Iftar start  {"\n"} 6:12 PM </Text>
       </View>
        
       
        </View> 


      <DirectionCard distence={"2 KM"} />
      
      
      <DuaCard
           iconName={'book-open-variant'}
            iconSize={36}
            iconColor={"tomato"}
            title={"ঈমান ঠিক রাখার আমল "}
            arabic={"يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلٰي دِيْنِكَ"}
            //english={"Allahumma la sahla illama ja'altahu sahla, wa anta taj'aa lul hazna eja shi'ta sahla"}
            bangla={"ইয়া মুক্বাল্লিবাল ক্বুলূব! সাব্বিত ক্বালবী ‘আলা দীনিকা"}
            meaning={"অর্থ: হে অন্তরসমূহের পরিবর্তনকারী! আপনি আমার অন্তরকে আপনার দ্বীনের (ইসলামের) উপর অটল রাখুন।"}
            //reference={"ইবনে মাজাহ  ১/৩৩৫ "}
          //  onPress={() => console.log("DuaCard9")}
          />
     
     {/* <EventList listName={"Upcoming Event" } eventName={"Eid ul Fitr"} daysRemaining={43} day={5} month={"April"} /> */}
      
     <QuoteCard QuotesTitle={" হাদিস"} 
                Quote={" তোমাদের যে কোন ব্যক্তি যে কোন অন্যায় কাজ দেখবে সে যেন তা বল প্রয়োগে বাধা প্রদান করে। এভাবে সম্ভব না হলে মুখে বাধা প্রদান করবে। সম্ভব না হলে সে অন্যায়কে ঘৃণা করবে। আর অন্তরে ঘৃণা করে বাধা প্রদান করা কাজটি সবচেয়ে দুর্বল ঈমানের পরিচয়। "}
                Reference={"সহিহ বুখারী, হাদিস নং ৬০৮৬"}
                bgcolor={"#DBD8D4"} />
                
     
        
     <NameCard2
     arabic={"ٱلْمُصَوِّرُ"}
      bangla={"আল-মুসাওয়ির	"}
      meaning={"যিনি সমস্ত সৃষ্টিজগত সৃজন করেছেন, তিনি পূর্ব আকৃতি ব্যতীত এগুলোকে সৃষ্টি করেছেন  "}/>

    
      
      
     <SurahCard 
        serial={"৫৯"}
        arabic={"الْحَشْر"}
        bangla={"আল-হাশর"}
        meaning={"সমাবেশ"}
        reference={"আয়াতঃ ২৪ মাদানী "}/>

        <DuaCard2
        title={"ঘুম থেকে উঠার পর দুআ "}
        bangla={"‘আলহামদুলিল্লা হিল্লাজি আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশুর’"}
        meaning={"অর্থ : সমস্ত প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত করার পর পুনরায় জীবিত করেছেন। আর তার দিকেই সবার পুনরুত্থান। "}
        reference={"(বুখারি, হাদিস : ৬৩২৪) (মুসলিম, হাদিস : ২৭১১)"}
        />

       
        


       
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
    backgroundColor: "#7FCEAA",
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    padding: 5,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
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
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});
