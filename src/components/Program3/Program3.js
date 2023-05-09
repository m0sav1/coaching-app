import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Sv from '../../languages/Sv'; 
import Eng from '../../languages/Eng'; 
import Ar from '../../languages/Ar'; 

const Program3 = () => {

  const language = useSelector((state) => state.language); //Hämta valt språk från redux store
  const translations = language === 'Sv' ? Sv : language === 'Ar' ? Ar : Eng; // Hämtar översättningen för de olika språken

    const navigation = useNavigation();  

    const goBack = () => {
      navigation.goBack();
    };


    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="chevron-left" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}> {translations.program3} </Text>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 70,
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    backButton: {
      position: 'absolute',
      left: 20,
      top: 75,
      bottom: 0,
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
    }
  });

export default Program3;