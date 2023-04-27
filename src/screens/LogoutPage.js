import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';
import {useNavigation} from '@react-navigation/native';
firebase.initializeApp(firebaseConfig);
function LogoutPage() {
  const navigation = useNavigation();
  
  function logout() {
    // Logga ut nuvarande användare med firebase auth
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('Logout successful!');
        navigation.navigate('Login'); // navigate to login page after logout
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogoutPage;