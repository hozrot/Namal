import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.Topcontainer}>
      <Text> Namal ! A practising Muslim </Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.containerItem1}>
      <TouchableOpacity>
        <Text>Item 11 </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.containerItem1}>
      <TouchableOpacity>
        <Text>Item 10 </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.containerItem4}>
      <View style={styles.header}>
        <Text>Icon </Text>
        <View style={{flex: 1,paddingLeft: 20}}>
        <Text> Dua </Text>
        
        </View>
        <Text>Share </Text>
      </View>
      <View style={styles.ItemBody}>
      <View style={styles.ItemContent}>
        <Text style={styles.Arabic}>  اللهمّ لا سهلا إلا ما جالتاهو سهلا، وأنت تجالول هازنا إذا شئت سهلا </Text>
        </View>
        <View style={styles.ItemContent}>
        <Text>Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul hazna idha shi'ta sahla </Text>
        </View>
      <View style={styles.ItemContent}>
        <Text>আল্লাহুম্মা লা সাহলা ইল্লা মা জা'আলতাহু সাহলা, ওয়া আন্তা তাজ'আলুল হাজনা ইদা শী'তা সাহলা </Text>
        </View>
      
        <View style={styles.ItemContent}>
        <Text>হে আল্লাহ, আপনি যা সহজ করেন তা ছাড়া আর কোন সহজ নেই এবং আপনি চাইলে কঠিনকে সহজ করতে পারেন। </Text>
        </View>
        </View>
        <TouchableOpacity style={styles.ItemFooter}>
          <Text>Reference: </Text>
          <Text>More </Text>
        </TouchableOpacity>
         
        
    </View>

    <View style={styles.containerItem3}>
      <TouchableOpacity>
        <Text>Item 5 </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.containerItem3}>
      <TouchableOpacity>
        <Text>Item 6 </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.containerItem3}>
      <TouchableOpacity>
        <Text>Item 7 </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.containerItem1}>
      <TouchableOpacity>
        <Text>Item 2 </Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flex: .1,
    flexDirection: 'row',
    padding: 5,
    
  },
  ItemBody: {
    flex: .8,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
   
  },
  ItemContent: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  Arabic: { 
    fontSize: 22,
    color: 'red',
    textAlign: 'center',

  },
  Bangla: { },
  English: { },
  ItemFooter: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    width: '100%',
    
  },

  containerItem1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'lightblue',
    margin: 10,
  },  
  containerItem2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  containerItem3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  containerItem4: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
  },
});
