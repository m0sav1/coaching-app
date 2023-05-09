import {StyleSheet } from "react-native";
// import { Firestore_Db } from "./firebaseConfig";
// import Registration from "./src/screens/Registration";
// import LoginPage from "./src/screens/LoginPage";
// import LogoutPage from "./src/screens/LogoutPage";
// import PasswordResetPage from "./src/screens/PasswordResetPage";
import { Provider } from 'react-redux';
import { store } from './src/languages/store';
import StartPage from "./src/screens/StartPage";
import HomePage from "./src/screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Program1Page from "./src/screens/Program1Page";
import PersonligUtveckling from "./src/components/Program1/PersonligUtveckling";
import Program2 from "./src/components/Program2/Program2";
import Program3 from "./src/components/Program3/Program3";
import Program4 from "./src/components/Program4/Program4";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false, gestureEnabled: false }}/>
        <Stack.Screen  name="HomePage" component={HomePage}options={{ headerShown: false, gestureEnabled: false  }}  />
        {/* <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name="PasswordResetPage" component={PasswordResetPage} options={{headerShown: false}}/>
        <Stack.Screen name="Logout" component={LogoutPage} options={{headerShown: false}}/> */}
          <Stack.Screen name="Program1Page" component={Program1Page} options={{headerShown: false}}/> 
          <Stack.Screen name="PersonligUtveckling" component={PersonligUtveckling} options={{headerShown: false}}/> 
          <Stack.Screen name="Program2" component={Program2} options={{headerShown: false}}/> 
          <Stack.Screen name="Program3" component={Program3} options={{headerShown: false}}/> 
          <Stack.Screen name="Program4" component={Program4} options={{headerShown: false}}/> 

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
