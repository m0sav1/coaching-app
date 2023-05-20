import Registration from "./src/screens/Registration";
import LoginPage from "./src/screens/LoginPage";
import LogoutPage from "./src/screens/LogoutPage";
import PasswordResetPage from "./src/screens/PasswordResetPage";
import { Provider } from 'react-redux';
import { store } from './src/languages/store';
import StartPage from "./src/screens/StartPage";
import HomePage from "./src/screens/HomePage";
import Translations  from './src/languages/Translations';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Program1Page from "./src/screens/Program1Page";
import KommunikationPage from "./src/screens/KommunikationPage";
import LedarskapPage from "./src/screens/LedarskapPage";
import PersonligUtveckling from "./src/components/Program1/PersonligUtveckling";
import Kommunikation from "./src/components/Program2/Kommunikation";
import Ledarskap from "./src/components/Program3/Ledarskap";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false, gestureEnabled: false }} /> 
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="PasswordResetPage" component={PasswordResetPage} options={{ headerShown: false }} />
            <Stack.Screen name="Logout" component={LogoutPage} options={{ headerShown: false }} />
            <Stack.Screen name="Program1Page" options={{ headerShown: false }}>
            {(props) => (
              <Translations>
                {(program1Description) => <Program1Page {...props} program1Description={program1Description} />}
              </Translations>
            )}
          </Stack.Screen>
            <Stack.Screen name="KommunikationPage" component={KommunikationPage} options={{ headerShown: false }} />
            <Stack.Screen name="LedarskapPage" component={LedarskapPage} options={{ headerShown: false }} />
            <Stack.Screen name="PersonligUtveckling" component={PersonligUtveckling} options={{ headerShown: false }} />
            <Stack.Screen name="Kommunikation" component={Kommunikation} options={{ headerShown: false }} />
            <Stack.Screen name="Ledarskap" component={Ledarskap} options={{ headerShown: false }} />
          </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
};


