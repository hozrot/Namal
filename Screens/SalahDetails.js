import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

//npx expo install accordion-collapse-react-native
import asmaulHusna from "../Database/Name";
import PagerView from "react-native-pager-view";

export default function SalahDetails({}) {
  const [isCollapsedOne, setIsCollapsedOne] = useState(true);
  const [isCollapsedTwo, setIsCollapsedTwo] = useState(true);
  const [isCollapsedThree, setIsCollapsedThree] = useState(true);
  const [isCollapsedFour, setIsCollapsedFour] = useState(true);
  const toggleCollapseOne = () => {
    setIsCollapsedOne(!isCollapsedOne);
  };
  const toggleCollapseTwo = () => {
    setIsCollapsedTwo(!isCollapsedTwo);
  };
  const toggleCollapseThree = () => {
    setIsCollapsedThree(!isCollapsedThree);
  };
  const toggleCollapseFour = () => {
    setIsCollapsedFour(!isCollapsedFour);
  };
  const pagerRef = useRef(null);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#7FCEAA" }}>
      <Collapse onToggle={toggleCollapseOne}>
        <CollapseHeader>
          <View style={styles.header}>
            <Text style={styles.headerText}>ফরয নামায সমূহ </Text>
            <MaterialCommunityIcons
              name={isCollapsedOne ? "chevron-down" : "chevron-up"}
              size={36}
              color="blue"
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ফজর
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                সুন্নত ২ রাকাত + ফরয ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  {" "}
                  এর সময় হলো সুবহে সাদেকের পর থেকে সূর্যোদয়ের আগ পর্যন্ত।
                  (মুসলিম, হাদিস : ১৪৫৬, ৯৬৬){" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                যোহরঃ
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                সুন্নত ৪ রাকাত + ফরয ৪ রাকাত + সুন্নত ২ রাকাত{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  এর সময় শুরু হয় সূর্য মধ্য আসমান থেকে ঢলে পড়ার পর। প্রতিটি
                  বস্তুর ছায়া দ্বিগুণ হওয়া পর্যন্ত জোহরের ওয়াক্ত বিদ্যমান থাকে।
                  অর্থাৎ ছায়া দ্বিগুণ হওয়ার পর জোহরের সময় শেষ হয়। (সহিহ বুখারি,
                  হাদিস : ৭১৭, ৫০৬, মুসলিম, হাদিস : ৯৬৯)
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                জুম্মা
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                সুন্নত ৪ রাকাত + ফরয ২ রাকাত + সুন্নত ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  এর সময় শুরু হয় সূর্য মধ্য আসমান থেকে ঢলে পড়ার পর। প্রতিটি
                  বস্তুর ছায়া দ্বিগুণ হওয়া পর্যন্ত জোহরের ওয়াক্ত বিদ্যমান থাকে।
                  অর্থাৎ ছায়া দ্বিগুণ হওয়ার পর জোহরের সময় শেষ হয়। (সহিহ বুখারি,
                  হাদিস : ৭১৭, ৫০৬, মুসলিম, হাদিস : ৯৬৯)
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                আসর
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                সুন্নত ৪ রাকাত + ফরয ৪ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  জোহরের সময় শেষ হওয়ার পর থেকে সূর্যাস্ত পর্যন্ত এর সময়। (সহিহ
                  বুখারি, হাদিস : ৭১৭, ৫৪৫){" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                মাগরিব
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ফরয ৩ রাকাত + সুন্নাত ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  এর সময় হলো সূর্যাস্তের পর আকাশ থেকে লালিমা বিদায় নেওয়া
                  পর্যন্ত। (মুসলিম, হাদিস : ৯৬৯, দারা কুতনি, হাদিস : ১০৬৬){" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                এশা
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                সুন্নত ৪ রাকাত + ফরয ৪ রাকাত + সুন্নত ২ রাকাত + বিতর ৩ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  এর সময় হলো আকাশের লালিমা বিদায় নেওয়ার পর থেকে সুবহে সাদেকের আগ
                  পর্যন্ত। (মুসলিম, হাদিস : ৯৬৯, সহিহ বুখারি, হাদিস : ৫০৮, ৫৩৮,
                  ৯৬৯){" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
          </PagerView>
          <View style={styles.body}>
            <Text> Other details will be there </Text>
          </View>
        </CollapseBody>
      </Collapse>
      <View style={styles.body}>
        <Text>
          {" "}
          "কাজেই তারা যা বলছে তাতে তুমি ধৈর্য ধারণ কর এবং তোমার প্রতিপালকের
          প্রশংসা (নিয়মিত) উচ্চারণ কর সূর্যোদয়ের পূর্বে (ফজর) ও তা অস্তমিত
          হওয়ার পূর্বে (আসর) এবং তাঁর পবিত্রতা ও মহিমা ঘোষণা কর রাত্রিকালে (ইশা
          ও তাহাজ্জুদ) ও দিনের প্রান্তগুলোয় (জোহর ও মাগরিব) যাতে তুমি সন্তুষ্ট
          হতে পার।" (সূরা ত্ব-হা, ১৩০)
        </Text>
      </View>
      <Collapse onToggle={toggleCollapseTwo}>
        <CollapseHeader>
          <View style={styles.header}>
            <Text style={styles.headerText}>ওয়াজিব নামায সমূহ </Text>
            <MaterialCommunityIcons
              name={isCollapsedTwo ? "chevron-down" : "chevron-up"}
              size={36}
              color="blue"
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                বিতর
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ৩ রাকাত{" "}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  {" "}
                  প্রত্যেকদিন এশার নামাজের পর হতে সুবহে সাদিক পর্যন্ত এই ওয়াজিব
                  নামাজের সময় থাকে।{" "}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {" "}
                  এছাড়া কোন নফল নামাজের নিয়ত করে নামাজ শুরু করলে তা আদায় করা
                  ওয়াজিব হয়ে যায়।{" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ঈদের নামায
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ঈদ উল আযহা ২ রাকাত {"\n"}
                ঈদ উল ফিতর ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  চোখের দেখায় সূর্য দিগন্ত থেকে আনুমানিক দুই মিটার উচ্চতায়
                  পৌঁছালে ঈদের নামাজ পড়া হয়। জোহর নামাজের আগেই ঈদের নামাজ
                  আদায় করতে হয়। সুন্নাত হিসেবে ঈদুল ফিতরের নামাজ কিছুটা দেরি
                  করে এবং ঈদুল আজহার নামাজ দ্রুত আদায় করা হয়। জুনদুব
                  রাদিয়াল্লাহু আনহু থেকে বর্ণিত, তিনি বলেছেন যে, নাবী
                  সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম আমাদেরকে নিয়ে ঈদুল ফিতরের সালাত
                  আদায় করতেন সূর্য যখন দু’ বর্শা পরিমাণ উপরে উঠত এবং ঈদুল আয্হা
                  আদায় করতেন সূর্য যখন এক বর্শা পরিমাণ উপরে উঠত। (ফিকহুস সুন্নাহ
                  : ১/৩১৯){" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
          </PagerView>
        </CollapseBody>
      </Collapse>
      <Collapse onToggle={toggleCollapseThree}>
        <CollapseHeader>
          <View style={styles.header}>
            <Text style={styles.headerText}>সুন্নত নামায সমূহ </Text>
            <MaterialCommunityIcons
              name={isCollapsedThree ? "chevron-down" : "chevron-up"}
              size={36}
              color="blue"
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                তাহিয়াতুল ওযূ
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  ওযু এবং গোসলের পর এ সালাত আদায় করতে হয়। অন্যান্য নফল
                  সুন্নাতের মতোই এ দু'রাকআত সালাত। যখনই ওযূ বা গোসল করবে
                  ওযু-গোসল শেষে তখনই দু’রাকআত এ সালাত আদায় করা। আর এ সালাত দিনে
                  ও রাতে যেকোন সময় আদায় করা যায়।
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                তাহিয়াতুল মসজিদ
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  মসজিদে ঢুকলে না বসে আগে দু'রাকআত সালাত আদায় করা আবশ্যক। এ
                  সালাতকে বলা হয় তাহিয়্যাতুল মসজিদ’। এটাকে ‘দুখুলুল মসজিদও বলা
                  হয়। অধিকাংশ ফকীহর মতে, এ সালাত হলো সুন্নাতে মুআক্কাদাহ।
                  অন্যান্য সুন্নাত সালাত যেভাবে পড়া হয় এ সালাতও এভাবেই পড়তে
                  হয়।
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                সূর্য ও চন্দ্রগ্রহণের নামায
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  সূর্য ও চন্দ্রগ্রহণের সময় এ সালাত আদায় করা উচিত। এ সালাতের
                  নিয়ত হলো সূর্য ও চন্দ্রগ্রহণের নিমিত্তে এ সালাত আদায় করছি। এ
                  সালাতের নিয়ত পড়ার পর দু’রাকআত সালাত আদায় করা উচিত।
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ইস্তিখারার সালাত
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                ২ রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  ব্যবসা-বাণিজ্যের সিদ্ধান্ত নেওয়া, বিয়ের পাত্র-পাত্রী বাছাই,
                  ঘর-বাড়ি নির্মাণ, কোন জমি-জমা ক্রয়-বিক্রয়, কোন চাকরিতে
                  যোগদান বা পদত্যাগ করা ইত্যাকার জায়েয বিষয়ে কোনটি করা সঠিক
                  হবে এ বিষয়ে যথাযথ সিদ্ধান্ত গ্রহণ ও মনস্থির করার জন্য
                  দু'রাকআত নফল সালাত আদায় করে নির্ধারিত দু'আ পড়া- এ সালাতকে
                  ‘সলাতুল ইস্তিখারা' অর্থাৎ ইস্তিখারার সালাত বলা হয়। ইস্তিখারা
                  অর্থ কল্যাণ কামনা।
                </Text>
              </View>
              <Text> </Text>
            </View>
          </PagerView>
        </CollapseBody>
      </Collapse>
      <View style={styles.body}>
        <Text>
          নবী মুহাম্মাদ (সাঃ) যেই নামাজগুলো আদায় করতেন, তাকে সুন্নাত নামাজ বলে।
          সুন্নাত নামাজ দুই প্রকার। ১. সুন্নাতে মুয়াক্কাদাহ ২. সুন্নাতে
          যায়েদাহ সুন্নাতে মুয়াক্কাদাহ বলতে ঐসব নামাজকে বুঝায়, যেগুলো নবী
          (সা:) নিয়মিত আদায় করতেন। কখনো পরিত্যাগ করতেন না ৷ সুন্নাতে যায়েদাহ
          বলতে বুঝায়, ইসলামের নবী মুহাম্মাদ (সা:) যেসব সুন্নাত নিয়মিত আদায়
          করতেন না। বরং প্রায় সময় আদায় করতেন ৷
        </Text>
      </View>
      <Collapse onToggle={toggleCollapseFour}>
        <CollapseHeader>
          <View style={styles.header}>
            <Text style={styles.headerText}>নফল নামায সমূহ </Text>
            <MaterialCommunityIcons
              name={isCollapsedFour ? "chevron-down" : "chevron-up"}
              size={36}
              color="blue"
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                তাহাজ্জুদ {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                রাকাত সংখ্যা সর্বনিম্ন দুই রাকাত আর সর্বোচ্চ ১২ রাকাত পড়া
                উত্তম।,{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  {" "}
                  তাহাজ্জুদ নামাজ রাতের শেষ তৃতীয়াংশে পড়া উত্তম। তবে ঘুম থেকে
                  না জাগার সম্ভাবনা থাকলে ইশার নামাজের পর দুই রাকাত সুন্নত ও
                  বিতরের আগে তা পড়ে নেয়া জায়েজ আছে।{" "}
                </Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} ইশরাক {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                4 রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} চাশত {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                4 রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} জাওয়াল {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                4 রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} আউওয়াবিন {"  << "}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                4 রাকাত{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
          </PagerView>
        </CollapseBody>
      </Collapse>
      <Collapse onToggle={toggleCollapseFour}>
        <CollapseHeader>
          <View style={{ flexDirection: "row", justifyContent: "space-between" ,backgroundColor:'red',alignItems:'center',padding:10}}>
            <Text style={styles.headerText}> নামাযের নিষিদ্ধ সময় সমূহ </Text>
            <MaterialCommunityIcons
              name={isCollapsedFour ? "chevron-down" : "chevron-up"}
              size={36}
              color="blue"
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
            <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
              <Image
                source={require("../assets/Noprayer.png")}
                style={{ width: 300, height: 300 }}
              />

              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} সুর্যদয় কালীন {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ফজরের নামাযের পর সূর্য না ওঠা পর্যন্ত আর কোন নামায নেই।”
                (বুখারী, মুসলিম, মিশকাত ১০৪১ নং)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} মধ্য দুপুর {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                সূর্য ঠিক মাথার উপর আসার পর থেকে একটু ঢলে না যাওয়া পর্যন্ত
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                {"  << "} সুর্যাস্ত কালীন {"  >>"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                সূর্য ডোবার কাছাকাছি হওয়া থেকে ডুবে না যাওয়া পর্যন্ত। (মুসলিম,
                আহমাদ, মুসনাদ, আবূদাঊদ, সুনান, নাসাঈ, সুনান, ইবনে মাজাহ্‌,
                সুনান, মিশকাত ১০৪০ নং)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 14 }}></Text>
              </View>
              <Text> </Text>
            </View>
          </PagerView>
        </CollapseBody>
      </Collapse>

      <Text style={{fontSize:24 ,fontWeight:'bold' ,textAlign:'center'}}> নামযের করনীয় সমূহ </Text>

      <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            {"  << "} ফরয ও ওয়াজিব {"  >>"}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
           
           ## নামাজের ফরজ মোট ১৩টি।  {"\n"}আহকাম ৭ টি। আরকান ৬ টি। নামাজের বাহিরের কাজগুলিকে আহকাম বলে। আর নামাজের ভিতরের কাজগুলোকে আরকান বলে। {"\n"}
            ## ওয়াজিব ১৪ টি 
          </Text>

          <Text> </Text>
        </View>
        <ScrollView style={styles.body}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginsBottom: 10,
            }}
          >
            {" "}
            {"  << "} ফরয কাজ সমূহ {"  >>"}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            নামাজের বাইরে ৭ ফরজ {"\n"}
            ১. শরীর পবিত্র হওয়া। {"\n"} 
            ২. কাপড় পবিত্র হওয়া। {"\n"} 
            ৩.নামাজের জায়গা পবিত্র হওয়া। {"\n"}
            ৪. সতর ঢাকা থাকা (পুরুষের সতর নাভি থেকে হাঁটু, নারীদের সতর হাতের
            কব্জি পায়ের পাতা ও মুখ ছাড়া পুরো দেহ)। {"\n"}
            ৫. কিবলামুখী হওয়া।{"\n"} ৬. ওয়াক্তমত নামাজ আদায় করা {"\n"}
            ৭.নামাজের নিয়ত করা। {"\n"}
             নামাজের মধ্যে ৬ ফরজ হলো: {"\n"}
            ১. তাকবিরে তাহরিমা (আল্লাহু আকবার) বলে নামাজ শুরু করা। {"\n"}
            ২. দাঁড়িয়ে নামাজ পড়া। {"\n"}
            ৩. সুরা ফাতিহার সাথে কুরআন পড়া। {"\n"}
            ৪. রুকু করা। {"\n"}
            ৫. দুই সিজদা করা। {"\n"}
            ৬. শেষ বৈঠক করা। {"\n"}

          </Text>
        </ScrollView>
        <ScrollView style={styles.body}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            {"  << "} ওয়াজিব  সমূহ {"  >>"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
           ১. সুরা ফাতিহা পড়া।  {"\n"}
           ২. সুরা ফাতিহার পর সুরা মিলানো। {"\n"}
           ৩. ফরজ নামাজের প্রথম দুই রাকাআতকে কিরাতের জন্য নির্ধারিত করা। {"\n"}
           ৪. কিরাআত, রুকু, সিজদার মধ্যে তরতিব ঠিক রাখা। {"\n"}
           ৫. রুকু থেকে সোজা হয়ে দাঁড়ানো।{"\n"}
            ৬. দুই সিজদার মাঝখানে সোজা হয়ে বসা।{"\n"}
            ৭. রুকু, সিজদা, দাঁড়ানো ও বৈঠকে কমপক্ষে এক তাসবিহ পরিমাণ স্থির থাকা।  {"\n"}
            ৮. তিন বা চার রাকাআত বিশিষ্ট নামাজে দুই রাকাআত পর আত্তাহিয়াতু পড়া বা সম-পরিমাণ সময় বসা। {"\n"}
            ৯. প্রথম ও শেষ বৈঠকে আত্তাহিয়াতু পড়া। {"\n"}
            ১০. ফজর, মাগরিব ও এশার নামাজের প্রথম দুই রাকাতে ইমামের জন্য উচ্চস্বরে কিরাআত পড়া, জোহর, আসর নামাজের মধ্যে ইমাম ও একাকী নামাজির অনুচ্চ শব্দে কিরাআত পড়া।{"\n"}
            ১১. সালাম ফিরানো। {"\n"}
            ১২. বিতরের নামাজের দোয়ায়ে কুনুত পড়া। {"\n"}
            ১৩. দুই ঈদের নামাজে ছয় তাকবির বলা। {"\n"}
            ১৪. প্রত্যেক রাকাতের ফরজ ও ওয়াজিবগুলোর তরতিব ঠিক রাখা।{"\n"}

          </Text>
        </ScrollView>
      </PagerView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    padding: 5,
    margin: 10,
    borderRadius: 15,
    height: 320,
  },
  header: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  headerText: {
    fontWeight: "bold",
  },
  body: {
    
  },

  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
