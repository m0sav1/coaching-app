
import{useNavigation} from'@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity, Text, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../../firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const { width } = Dimensions.get('window');

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("HomePage");
        // Navigate to the home screen
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
          if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
          Alert.alert('Invalid Password', 'The password you entered is invalid.', [{ text: 'OK' }]);
        } if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
          Alert.alert('No user found', 'Please enter a valid email address and try again.', [{ text: 'OK' }]);
        }
      });
  };

  const handleRegistrationPress = () => {
    navigation.navigate('Registration');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('PasswordResetPage');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPassword}> Forgot Password? </Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}> 
      <Text style={styles.buttonText}> LOGIN </Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
      <Text style={styles.registerText}> Don't have an account?</Text>
      <TouchableOpacity onPress={handleRegistrationPress}>
      <Text style={styles.registerButtonText}> Sign up here </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    flexDirection: 'column'
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
    backgroundColor:'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  forgotPassword: {
    fontSize: 15,
    color: 'blue',
    marginLeft: 200,
    color: 'grey',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  orText: {
    color: 'grey',
  },
  registerContainer: {
    position: 'absolute',
    width: '100%',
    bottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 16,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
