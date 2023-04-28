import { View, Text, StyleSheet, ScrollView,  Dimensions,TextInput, TouchableOpacity, Button} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import LogoutPage from "./LogoutPage";


const navigation = useNavigation();


// const handleProgram1 = () => {
//   navigation.navigate("../components/Program1/Program1");
// }

// const handleProgram2 = () => {
//   navigation.navigate("../components/Program2/Program2");
// }

const HomePage = () => {
  return (
    <View style={styles.container}>
        {/* <LogoutPage/> */}
      {/* <Text style={styles.header}>Home Page</Text>
      <Button title="Program 1" onPress={handleProgram1} style={styles.button}/>
      <Button title="Program 2" onPress={handleProgram2} style={styles.button}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  }
});

export default HomePage;
