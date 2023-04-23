import React from 'react';
import { Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

function logout() {
  // Logga ut nuvarande användare med firebase auth
  firebase.auth()
   .signOut()
   .then(() => {
      console.log('Logout successful!');
    })
    .catch((error) => {
      console.error(error);
    });
}

function LogoutButton() {
  return (
    <Button
      title="Logout"
      onPress={() => logout()}
    />
  );
}
//Kan inte öppna i expo så kopierade in style från login. Ska ändra detta så fort expo funkar.
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

export default LogoutButton;
