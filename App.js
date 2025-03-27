import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './Screens/Dashboard';
import AsmaulHusna from "./Screens/AsmaulHusna";
import SurahList from "./Screens/SurahList";
import Salah from "./Screens/Salah";
import Siam from "./Screens/Siam";
import Jakat from "./Screens/Jakat";
import Hajj from "./Screens/Hajj";
import Iman from "./Screens/Iman";
import DuaByProphetList from "./Screens/DuaByPhophetList";
import ZikirList from "./Screens/ZikirList";
import DataList from "./Screens/DataList";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
       
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ header: () => null }} />
        <Stack.Screen name="AsmaulHusna" component={AsmaulHusna}  />
        <Stack.Screen name="SurahList" component={SurahList}  />
        <Stack.Screen name="Salah" component={Salah}  />
        <Stack.Screen name="Siam" component={Siam}  />
        <Stack.Screen name="Jakat" component={Jakat}  />
        <Stack.Screen name="Hajj" component={Hajj}  />
        <Stack.Screen name="Iman" component={Iman}  />
        <Stack.Screen name="DuaByProphetList" component={DuaByProphetList}  />
        <Stack.Screen name="ZikirList" component={ZikirList}  />
        <Stack.Screen name="DataList" component={DataList}  />
        
       
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

