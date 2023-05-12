import React  from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { Video } from "expo-av";
import { ActivityIndicator } from "react-native";
import{useNavigation} from'@react-navigation/native';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import Sv from '../../languages/Sv'; 
import Eng from '../../languages/Eng'; 
import Ar from '../../languages/Ar'; 
import * as FileSystem from "expo-file-system";
import firebaseConfig from "../../../firebaseConfig";




const Kommunikation = () => {
  const [videoUrls, setVideoUrls] = useState([]);
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
      FetchVideos();
      FetchAudio();
    });
      return unsubscribe;
  }, [navigation]);

  const FetchVideos = async () => {
    try {
      const videoDirectory = `${FileSystem.cacheDirectory}videos/`;
      const videoInfo = await FileSystem.getInfoAsync(videoDirectory);
      if (!videoInfo.exists) {
        await FileSystem.makeDirectoryAsync(videoDirectory);
      }
      const storage = getStorage();
      const listRef = ref(storage, "Kommunikation/videos/");
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          // console.log("URL of video file:", url);
          const fileUri = `${videoDirectory}${itemRef.name}`;
          const fileInfo = await FileSystem.getInfoAsync(fileUri);
          if (!fileInfo.exists) {
            await FileSystem.downloadAsync(url, fileUri);
          }
          return fileUri;
        })
      );
      setVideoUrls(urls);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const FetchAudio = async () => {
    try {
      const audioDirectory = `${FileSystem.cacheDirectory}audios/`;
      const audioInfo = await FileSystem.getInfoAsync(audioDirectory);
      console.log(audioInfo);
      if (!audioInfo.exists) {
        await FileSystem.makeDirectoryAsync(audioDirectory);
       
      }
      const storage = getStorage();
      const listRef = ref(storage, "Kommunikation/audio/");
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          // console.log("URL of audio file:", url);
          const fileUri = `${audioDirectory}${itemRef.name}`;
          const fileInfo = await FileSystem.getInfoAsync(fileUri);
          if (!fileInfo.exists) {
            await FileSystem.downloadAsync(url, fileUri);
          }
          return fileUri;
        })
      );
      setAudioUrls(urls);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  
// LOGS
  const handleVideoError = (error) => {
    console.log("Video error:", error);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded");
  };

  const handleAudioError = (error) => {
    console.log("Audio error:", error);
  };

  const handleAudioLoad = () => {
    console.log("Audio loaded");
  };
  
  console.log('audios: ' + AudioUrls.length);
  console.log('video: ' + videoUrls.length);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
        { loading && videoUrls.length === 0 ? <Text>No videos found</Text> :  <ActivityIndicator size="large" />}
      </View>
    );
  }

 
  return (
    <ScrollView  showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
       <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text>Hello its me </Text>
       

      {!loading ?
        videoUrls.map((url, index) => (
          <Video
            key={index}
            isMuted={false}
            volume={1.0}
            source={{ uri: url }}
            style={styles.video}
            useNativeControls={true}
            resizeMode="container"
            onError={handleVideoError}
            onLoad={handleVideoLoad}
          />
        )) : <ActivityIndicator size="large" />}
       <Text>Audio</Text>

   

      {!loading ?
        AudioUrls.map((url, index) => (
          
          <Video
          
            key={index}
            isMuted={false}
            volume={1.0}
            source={{ uri: url }}
            style={styles.audio}
            useNativeControls={true}
            resizeMode="container"
            onError={handleAudioError}
            onLoad={handleAudioLoad}
            showPoster={true}
            posterSource={require('../../../assets/favicon.png')}
          />
        )) : <ActivityIndicator size="large"/>}

    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  video: {
    width: 320,
    height: 240,
    marginBottom: 20,
  },
  audio: {
    width: 320,
    height: 80,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    paddingTop: 30,
    // top: 75,
    // bottom: 0,
    justifyContent: 'center',
  }
});

export default Kommunikation;
