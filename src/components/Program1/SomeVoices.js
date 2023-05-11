import React  from "react";
import firebaseConfig from "../../../firebaseConfig";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Audio} from "expo-av";
import { ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import{useNavigation} from'@react-navigation/native';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import Sv from '../../languages/Sv'; 
import Eng from '../../languages/Eng'; 
import Ar from '../../languages/Ar'; 


const SomeVoices = () => {
  const [AudioUrls, setAudioUrls] = useState([]);
  // const { width, height } = Dimensions.get("window");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  const language = useSelector((state) => state.language); //Hämta valt språk från redux store
  const translations = language === 'Sv' ? Sv : language === 'Ar' ? Ar : Eng; // Hämtar översättningen för de olika språken


    const goBack = () => {
      navigation.goBack();
    };

 
   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      FetchAudio();
    });
      return unsubscribe;
  }, [navigation]);

  const FetchAudio = async () => {
    try {
      const cachedUrls = await AsyncStorage.getItem('audioUrls');
  
      if (cachedUrls !== null) {
        console.log('Retrieved cached audio URLs');
        setAudioUrls(JSON.parse(cachedUrls));
        setLoading(false);
      } else {
        const storage = getStorage();
        const listRef = ref(storage, "PersonligUtveckling/audio/");
  
        listAll(listRef)
          .then((res) =>
            Promise.all(
              res.items.map((itemRef) =>
                getDownloadURL(itemRef).then((url) => {
                  console.log("URL of audio file:", url);
                  return url;
                })
              )
            )
          )
          .then((urls) => {
            setAudioUrls(urls);
            AsyncStorage.setItem('audioUrls', JSON.stringify(urls));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => setLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const handleAudioError = (error) => {
    console.log("Audio error:", error);
  };

  const handleAudioLoad = () => {
    console.log("Audio loaded");
  };
  

  console.log(AudioUrls.length);

  if (loading) {
    return (
      <View style={[styles.container, styles.handleAudioError]}>
        <ActivityIndicator size="large" />
        {loading && AudioUrls.length === 0 ? <Text>No audio found</Text> :  <ActivityIndicator size="large" />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
       
      <Text>Hello its me i'm looking for you </Text>
    
      {!loading ?
        AudioUrls.map((url, index) => (
          <Audio
            key={index}
            isMuted={false}
            volume={1.0}
            source={{ uri: url }}
            style={styles.audio}
            useNativeControls={true}
            resizeMode="container"
            onError={handleAudioError}
            onLoad={handleAudioLoad}
          />
        )) : <ActivityIndicator size="large"/>}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  audio: {
    width: 320,
    height: 240,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    paddingTop: 30,
    top: 0,
    bottom: 75,
    justifyContent: 'center',
  }
});

export default SomeVoices;
