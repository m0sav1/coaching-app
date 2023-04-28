import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Program1 from "../components/Program1/Program1";
// import LogoutPage from "./LogoutPage";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      {/* <LogoutPage/> */}
      <Program1 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
