import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

function LogoutPage() {
  const navigation = useNavigation();
  
  function Logout() {
    // Logga ut nuvarande användare med firebase auth
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('Logout successful!');
        navigation.navigate('LoginPage'); // navigate to login page after logout
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={Logout}
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