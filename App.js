import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './Screens/Dashboard';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
       
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ header: () => null }} />
       
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

