import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBM3qMuVDxSFJS0bCrU7Fo8s-rpMJs-FLo",
    authDomain: "phantoms-mobile-app.firebaseapp.com",
    projectId: "phantoms-mobile-app",
    storageBucket: "phantoms-mobile-app.appspot.com",
    messagingSenderId: "733350156577",
    appId: "1:733350156577:web:62c601aa9fcb9ec8ae4660",
    measurementId: "G-6V593ZNWE3",
  };

  initializeApp(firebaseConfig);

  // Just test to check conecction
  const sendDataToFireBase = async () => {
    const firestore = getFirestore();

    await setDoc(doc(firestore, "users", "user_id"), {
      email: "sebaswat@gmail.com",
      login: "testlogin",
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
