import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import LogoutPage from './LogoutPage';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';




const HomePage = () => {

  firebase.initializeApp(firebaseConfig);
  return (
    <View style={styles.container}>
      <Text>Du är inloggad i homepage</Text>
      <LogoutPage/>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
})


export default HomePage; 