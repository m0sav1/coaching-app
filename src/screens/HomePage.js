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

      <Pressable onPress={() => navigation.navigate("Program1Page")} style={styles.button}>
        <Text>{translations.program1}</Text>
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate("KommunikationPage")} style={styles.button}>
        <Text>{translations.program2}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Ledarskap")} style={styles.button}>
        <Text>{translations.program3}</Text>
      </Pressable>

      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 50,
    //backgroundColor:'#6ab5ff'
  },
  buttonList: {
    flex: 1,
    justifyContent: 'flex-start' 
  },
  button: {
    marginLeft: 21,
    marginTop: 75,
    borderRadius: 10,
    height: 95,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#6ab5ff'
    
  }

});

export default HomePage;
