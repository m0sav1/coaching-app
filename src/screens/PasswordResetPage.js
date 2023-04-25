import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../../firebaseConfig';


firebase.initializeApp(firebaseConfig);

const PasswordResetPage = () => {
    const nav = useNavigation();
  const [email, setEmail] = useState('');

 
  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('A password reset email has been sent to your email address.');
      })
      .catch((error) => {
        console.error('Failed to reset password:', error);
      });
  };

  return (
    <View style = {styles.container}>
      <TextInput
        placeholder="Enter email address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Button title="Reset Password" onPress={resetPassword} />
    </View>
  );
};

const handleRegistrationPress = () => {
    nav.navigate('Login');
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
});

export default PasswordResetPage;