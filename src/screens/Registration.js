import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Fixa frontend
 * Byt skräm efter user är skapad
 * 
 */

const firebaseConfig = {
  apiKey: "AIzaSyBM3qMuVDxSFJS0bCrU7Fo8s-rpMJs-FLo",
  authDomain: "phantoms-mobile-app.firebaseapp.com",
  projectId: "phantoms-mobile-app",
  storageBucket: "phantoms-mobile-app.appspot.com",
  messagingSenderId: "733350156577",
  appId: "1:733350156577:web:62c601aa9fcb9ec8ae4660",
  measurementId: "G-6V593ZNWE3",
};

firebase.initializeApp(firebaseConfig);

const { width } = Dimensions.get('window');

const Registration = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleNextPress = (ref) => {
    setCurrentPage(currentPage + 1);
  };

  const handleRegisterPress = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Användarkonto skapat
      const user = userCredential.user;
      const userRef = firebase.firestore().collection('users').doc(user.uid);
      userRef.set({
        name: name,
        email: email
      });
      //lägg navigation här för att byta sida efter registering
    } catch (error) {
      // User creation failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };
  return (
    //<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
      {currentPage === 0 && (
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Vad heter du?</Text>
          <TextInput style={styles.input} placeholder="Förnamn och efternamn" value={name} onChangeText={handleNameChange} />
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Nästa</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentPage === 1 && (
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Vad är din e-postadress?</Text>
          <TextInput style={styles.input} placeholder="Din e-postadress" value={email} onChangeText={handleEmailChange} />
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Nästa</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentPage === 2 && (
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Välj ett lösenord</Text>
          <TextInput style={styles.input} placeholder="Ditt lösenord" secureTextEntry={true} value={password} onChangeText={handlePasswordChange} />
          <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Skapa konto</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Registration;