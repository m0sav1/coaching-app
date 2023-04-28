import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
// import { doc, setDoc } from "firebase/firestore";
// import { Firestore_Db } from "./firebaseConfig";
import StartPage from "./src/screens/StartPage";
// import Registration from "./src/screens/Registration";
// import LoginPage from "./src/screens/LoginPage";
import HomePage from "./src/screens/HomePage";
// import LogoutPage from "./src/screens/LogoutPage";
// import PasswordResetPage from "./src/screens/PasswordResetPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
     
        <Stack.Screen name="PasswordResetPage" component={PasswordResetPage} options={{headerShown: false}}/>
        <Stack.Screen name="Logout" component={LogoutPage} options={{headerShown: false}}/> */}
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
