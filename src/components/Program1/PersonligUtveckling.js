import React  from "react";
import firebaseConfig from "../../../firebaseConfig";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { Video } from "expo-av";
// import { WebView } from 'react-native-webview';
import { ActivityIndicator } from "react-native";
// import VideoPlayer from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{useNavigation} from'@react-navigation/native';



const PersonligUtveckling = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  // const { width, height } = Dimensions.get("window");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      FetchVideos();
    });
      return unsubscribe;
  }, [navigation]);

  const FetchVideos = async () => {
    try {
      const cachedUrls = await AsyncStorage.getItem('videoUrls');
  
      if (cachedUrls !== null) {
        console.log('Retrieved cached video URLs');
        setVideoUrls(JSON.parse(cachedUrls));
        setLoading(false);
      } else {
        const storage = getStorage();
        const listRef = ref(storage, "PersonligUtveckling/videos/");
  
        listAll(listRef)
          .then((res) =>
            Promise.all(
              res.items.map((itemRef) =>
                getDownloadURL(itemRef).then((url) => {
                  console.log("URL of video file:", url);
                  return url;
                })
              )
            )
          )
          .then((urls) => {
            setVideoUrls(urls);
            AsyncStorage.setItem('videoUrls', JSON.stringify(urls));
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

  

  const handleVideoError = (error) => {
    console.log("Video error:", error);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded");
  };
  

  console.log(videoUrls.length);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
        { loading && videoUrls.length === 0 ? <Text>No videos found</Text> :  <ActivityIndicator size="large" />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    
      {!loading ?
        videoUrls.map((url, index) => (
          <Video
            key={index}
            isMuted={false}
            volume={2.0}
            source={{ uri: url }}
            style={styles.video}
            useNativeControls={true}
            resizeMode="contain"
            onError={handleVideoError}
            onLoad={handleVideoLoad}
          />
        )) : <ActivityIndicator size="large" />}
    </View>
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
});

export default PersonligUtveckling;
