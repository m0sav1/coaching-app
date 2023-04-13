import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Just test to check conecction
const sendDataToFireBase = async () => {
  const firestore = getFirestore();

  await setDoc(doc(firestore, "users", "user_id"), {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
