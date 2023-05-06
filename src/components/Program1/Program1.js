import React  from "react";
import firebaseConfig from "../../../firebaseConfig";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { Video } from "expo-av";
// import { WebView } from 'react-native-webview';
import { ActivityIndicator } from "react-native";
// import VideoPlayer from 'react-native-video';



const Program1 = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  // const { width, height } = Dimensions.get("window");
  const [loading, setLoading] = useState(true);
  


   useEffect(() => {
      FetchVideos();
  }, []);

  const FetchVideos = () => {
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
      .then((urls) => setVideoUrls(urls))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
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

export default Program1;
