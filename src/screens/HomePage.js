import { View, Text, StyleSheet, Pressable} from "react-native";
import React, {useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Sv from '../languages/Sv'; 
import Eng from '../languages/Eng'; 
import Ar from '../languages/Ar'; 

// import LogoutPage from "./LogoutPage";


const HomePage = () => {
  const navigation = useNavigation();
  const language = useSelector((state) => state.language); //Hämta valt språk från redux store
  const translations = language === 'Sv' ? Sv : language === 'Ar' ? Ar : Eng; // Hämtar översättningen för de olika språken

  return (
    <View >
        {/* <LogoutPage/> */}
      <Text style={styles.header}>{translations.home}</Text>

      {/* Jag har gjört knappar med Pressable eftersom det gör inte att stylea <Button>  
      Det går bra att ändra styling sen om man vill, det är bara tillfälligt i nu läge //Sebbe */}

      <View style={styles.buttonList}>

<<<<<<< HEAD
      <Pressable onPress={() => navigation.navigate("Program1")} style={styles.button}>
        <Text>{translations.program1}</Text>
=======
      <Pressable onPress={() => navigation.navigate("Program1Page")} style={styles.button}>
        <Text>Program 1</Text>
>>>>>>> main
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate("Program2")} style={styles.button}>
        <Text>{translations.program2}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Program3")} style={styles.button}>
        <Text>{translations.program3}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Program4")} style={styles.button}>
        <Text>{translations.program4}</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 50,
    paddingTop: 50,
    backgroundColor:'orange'
  },
  buttonList: {
    flex: 1,
    justifyContent: 'flex-start' 
  },
  button: {
    marginLeft: 90,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    height: 60,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#1386F9'
    
  }

});

export default HomePage;
