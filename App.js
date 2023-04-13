import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { Firestore_Db } from "./firebaseConfig";

export default function App() {
  // JUST FOR TEST
  const sendDataToFireBase = async () => {
    await setDoc(doc(Firestore_Db, "users", "user_id2"), {
      email: "test2@gmail.com",
      login: "IamAwesome",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to coaching app!</Text>
      <Button title="Send data (Test)" onPress={sendDataToFireBase} />
      <StatusBar style="auto" />
    </View>
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
