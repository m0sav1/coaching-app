import {StyleSheet } from "react-native";
// import { Firestore_Db } from "./firebaseConfig";
// import Registration from "./src/screens/Registration";
// import LoginPage from "./src/screens/LoginPage";
// import LogoutPage from "./src/screens/LogoutPage";
// import PasswordResetPage from "./src/screens/PasswordResetPage";
import StartPage from "./src/screens/StartPage";
import HomePage from "./src/screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Program1 from "./src/components/Personlig-utveckling/Program1";
import Program2 from "./src/components/Kommunikation/Program2";
import Program3 from "./src/components/Motiverande-ledarskap/Program3";
import Program4 from "./src/components/Program4/Program4";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }}  />
        <Stack.Screen  name="HomePage" component={HomePage}options={{ headerShown: false }}  />
        {/* <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name="PasswordResetPage" component={PasswordResetPage} options={{headerShown: false}}/>
        <Stack.Screen name="Logout" component={LogoutPage} options={{headerShown: false}}/> */}
          <Stack.Screen name="Program1" component={Program1} options={{headerShown: false}}/> 
          <Stack.Screen name="Program2" component={Program2} options={{headerShown: false}}/> 
          <Stack.Screen name="Program3" component={Program3} options={{headerShown: false}}/> 
          <Stack.Screen name="Program4" component={Program4} options={{headerShown: false}}/> 


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
