import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import DuaCard from "../component/DuaCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QuoteCard from "../component/QuoteCard";
import MenuCard2 from "../component/ManuCard2";
import NameCard2 from "../component/NameCard2";
import NameCard from "../component/NameCard";
import DirectionCard from "../component/DirectionCard";
import DuaCard2 from "../component/DuaCard2";
import SurahCard from "../component/SurahCard";
import { ayaList } from "../Database/QuranAyat";
import asmaulHusna from "../Database/Name";
import surahs from "../Database/Surah";
import { duaByPhophet } from "../Database/DuaByProphet";
import zikrs from "../Database/Zikir";
import { dualist } from "../Database/Dua";

function convertToBanglaNumber(number) {
  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaNumbers[parseInt(digit)])
    .join("");
}

export const getRandomZikir = () => {
  const randomIndex = Math.floor(Math.random() * zikrs.length);
  return zikrs[randomIndex];
};
export const getRandomDua = () => {
  const randomIndex = Math.floor(Math.random() * dualist.length);
  return dualist[randomIndex];
};

export const getRandomAya = () => {
  const randomIndex = Math.floor(Math.random() * ayaList.length);
  return ayaList[randomIndex];
};
export const getRandomDuaByPhophet = () => {
  const randomIndex = Math.floor(Math.random() * duaByPhophet.length);
  return duaByPhophet[randomIndex];
};
export const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * asmaulHusna.length);
  return asmaulHusna[randomIndex];
};
export const getRandomSurah = () => {
  const randomIndex = Math.floor(Math.random() * surahs.length);
  return surahs[randomIndex];
};

export default function Dashboard({ navigation }) {
  const [randomDuaByPhophet, setRandomDuaByPhophet] = useState(getRandomDuaByPhophet());
  const [randomAya, setRandomAya] = useState(getRandomAya());
  const [randomName, setRandomName] = useState(getRandomName());
  const [randomSurah, setRandomSurah] = useState(getRandomSurah());
  const [randomZikir, setRandomZikir] = useState(getRandomZikir());
  const [randomDua, setRandomDua] = useState(getRandomDua());

  useEffect(() => {
    // প্রতিবার কম্পোনেন্ট মাউন্ট হওয়ার সময় নতুন র্যান্ডম
    setRandomAya(getRandomAya());
    setRandomDuaByPhophet(getRandomDuaByPhophet());
    setRandomName(getRandomName());
    setRandomSurah(getRandomSurah());
    setRandomZikir(getRandomZikir());
    setRandomDua(getRandomDua());
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "indigo" }}>
      <View style={styles.Topcontainer}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          {" "}
          Namal ! A practising Muslim{" "}
        </Text>
       
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
          backgroundColor: "#871F78",
          margin: 5,
          borderRadius: 15,
        }}
      >
        <MenuCard2
          menuImage={require("../assets/pray.png")}
          menuName={"নামায"}
          onPress={() => navigation.navigate("Salah")}
        />
        <MenuCard2
          menuImage={require("../assets/iftar.png")}
          menuName={"সাওম"}
          onPress={() => navigation.navigate("Siam")}
        />
        <MenuCard2
          menuImage={require("../assets/kabaa.png")}
          menuName={"হজ্জ"}
          onPress={() => navigation.navigate("Hajj")}
        />
        <MenuCard2
          menuImage={require("../assets/alms.png")}
          menuName={"যাকাত"}
          onPress={() => navigation.navigate("Jakat")}
        />
        <MenuCard2
          menuImage={require("../assets/bismillah.png")}
          menuName={"ঈমান"}
          onPress={() => navigation.navigate("Iman")}
        />
      </ScrollView>

      
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#871F78",
          borderRadius: 35,
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 0.15,
            padding: 10,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "purple",
            borderRadius: 35,
            borderWidth: 1,
            borderColor: "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "white",
              padding: 5,
              textAlign: "center",
            }}
          >
            {" "}
            25 {"\n"}Feb
          </Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: "space-around" }}>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              padding: 5,
              textAlign: "center",
            }}
          >
            {" "}
            Monday {"\n"} 05 Ramadan{" "}
          </Text>
        </View>

        <View style={{ flex: 0.3, justifyContent: "space-around" }}>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              padding: 5,
              textAlign: "center",
            }}
          >
            {" "}
            Sahri Ends {"\n"} 5:05 AM{" "}
          </Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: "space-around" }}>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              padding: 5,
              textAlign: "center",
            }}
          >
            {" "}
            Iftar start {"\n"} 6:12 PM{" "}
          </Text>
        </View>
      </View>
      <DuaCard
        image={require("../assets/beads.png")}
        title={" জিকির "}
        reference={randomZikir.reference}
       
        arabic={randomZikir.arabic}
        bangla={randomZikir.bangla}
        meaning={randomZikir.meaning}
        bgcolor={"#BfF9E6"}
        onPress={()=> navigation.navigate("ZikirList")}
      />

      <DirectionCard distence={"2 KM"} />

      <DuaCard
        image={require("../assets/dua.png")}
        title={randomDua.title}
        arabic={randomDua.arabic}
        bangla={randomAya.bangla}
        reference={randomDua.reference}
        bgcolor={"#BfF9E6"}
        onPress={()=> navigation.navigate("DataList")}

        
      />

      {/* <EventList listName={"Upcoming Event" } eventName={"Eid ul Fitr"} daysRemaining={43} day={5} month={"April"} /> */}

      {/* <QuoteCard QuotesTitle={" পরামর্শ"} 
     titelColor={"green"}
                Quote={" তোমাদের যে কোন ব্যক্তি যে কোন অন্যায় কাজ দেখবে সে যেন তা বল প্রয়োগে বাধা প্রদান করে। এভাবে সম্ভব না হলে মুখে বাধা প্রদান করবে। সম্ভব না হলে সে অন্যায়কে ঘৃণা করবে। আর অন্তরে ঘৃণা করে বাধা প্রদান করা কাজটি সবচেয়ে দুর্বল ঈমানের পরিচয়। "}
                Reference={"সহিহ বুখারী, হাদিস নং ৬০৮৬"}
               /> */}
      <QuoteCard
        QuotesTitle={" নিষেধ "}
        titelColor={"red"}
        Quote={
          " তোমাদের যে কোন ব্যক্তি যে কোন অন্যায় কাজ দেখবে সে যেন তা বল প্রয়োগে বাধা প্রদান করে। এভাবে সম্ভব না হলে মুখে বাধা প্রদান করবে। সম্ভব না হলে সে অন্যায়কে ঘৃণা করবে। আর অন্তরে ঘৃণা করে বাধা প্রদান করা কাজটি সবচেয়ে দুর্বল ঈমানের পরিচয়। "
        }
        Reference={"সহিহ বুখারী, হাদিস নং ৬০৮৬"}
        bgcolor="#C9FADC"
      />

      <DuaCard
        image={require("../assets/quran.png")}
        reference={randomAya.reference}
        title={"কুরআন এর আয়াত "}
        arabic={randomAya.arabic}
        bangla={randomAya.bangla}
        meaning={randomAya.meaning}
        bgcolor={"#BfF9E6"}
      />


      <NameCard2
        arabic={randomName.arabic}
        bangla={randomName.bangla}
        meaning={randomName.meaning}
        onPress={() => navigation.navigate("AsmaulHusna")}
      />
      <DuaCard
         image={randomDuaByPhophet.image}
        //imageBack={randomDuaByPhophet.image}
        reference={randomDuaByPhophet.reference}
        title={randomDuaByPhophet.title}
        arabic={randomDuaByPhophet.arabic}
        bangla={randomDuaByPhophet.bangla}
        meaning={randomDuaByPhophet.meaning}
        bgcolor={"#E9FDF1"}
        onPress={() => navigation.navigate("DuaByProphetList")}
      />
       

      <SurahCard
        serial={randomSurah.id}
        arabic={randomSurah.arabic}
        bangla={randomSurah.bangla}
        meaning={randomSurah.meaning}
        reference={randomSurah.meccan ? "মক্কী " : "মাদীনি"}
        aya={convertToBanglaNumber(randomSurah.ayah)}
        menuImage={
          randomSurah.meccan
            ? require("../assets/mecca.png")
            : require("../assets/madina.png")
        }
        onPress={() => navigation.navigate("SurahList")}
      />

      <DuaCard2
        title={"ঘুম থেকে উঠার পর দুআ "}
        arabic={
          "اَلْحَمْدُ لِلّٰهِ الَّذِیْۤ اَحْیَانَا بَعْدَ مَاۤ اَمَاتَنَا وَ اِلَیْهِ النُّشُوْرُ"
        }
        bangla={
          "‘আলহামদুলিল্লা হিল্লাজি আহইয়ানা বা’দা মা আমাতানা ওয়া ইলাইহিন নুশুর’"
        }
        meaning={
          "অর্থ : সমস্ত প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত করার পর পুনরায় জীবিত করেছেন। আর তার দিকেই সবার পুনরুত্থান। "
        }
        reference={"(বুখারি, হাদিস : ৬৩২৪) (মুসলিম, হাদিস : ২৭১১)"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
    backgroundColor: "red",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});
