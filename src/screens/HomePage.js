import { View, Text, StyleSheet, Pressable} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import LogoutPage from "./LogoutPage";


const HomePage = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* <LogoutPage/> */}
      <Text style={styles.header}>Home Page</Text>

      {/* Jag har gjört knappar med Pressable eftersom det gör inte att stylea <Button>  
      Det går bra att ändra styling sen om man vill, det är bara tillfälligt i nu läge //Sebbe */}

      <Pressable onPress={() => navigation.navigate("Program1")} style={styles.button}>
        <Text>Program 1</Text>
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate("Program2")} style={styles.button}>
        <Text>Program 2</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 34,
    paddingTop: 40,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#1386F9'
  }

});

export default HomePage;
