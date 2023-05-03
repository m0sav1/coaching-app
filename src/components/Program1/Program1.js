import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll} from "firebase/storage"
import { Video } from "expo-av";
import firebaseConfig from "../../../firebaseConfig";



const Program1 = () => {
  const [videos, setVideos] = useState([]);


  
   useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, "PersonligUtveckling/");

    listAll(listRef)
      .then((res) => {
        
        const promises = res.items.map((itemRef) =>
          itemRef.getDownloadURL().then((url) => ({
            name: itemRef.name,
            // url,
          })),
          console.log(res.items[0].name),
          // console.log(res.items[0].url)

        );
        Promise.all(promises).then((videos) => {
          setVideos(videos);
      
          
        })
       
      })
      .catch((error) => {
        
        console.log(error);
      });
  }, []);
  


  return (
    <View>
     <Text style={styles.container}>Program 1</Text>
      {videos.map((video) => (
        <View key={video.name}>
          <Text>{video.name}</Text>
          {/* <Video source={{ uri: video.url }} /> */}
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
});

export default Program1;
