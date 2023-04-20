import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { Firestore_Db } from "./firebaseConfig";
import Startpage from './src/screens/Startpage';
import Registration from './src/screens/Registration';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import PasswordResetPage from './src/screens/PasswordResetPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  // JUST FOR TEST
  const sendDataToFireBase = async () => {
    await setDoc(doc(Firestore_Db, "users", "user_id2"), {
      email: "test2@gmail.com",
      login: "IamAwesome",
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Startpage" component={Startpage} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="PasswordResetPage" component={PasswordResetPage} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
