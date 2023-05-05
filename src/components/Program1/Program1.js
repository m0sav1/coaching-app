import React  from "react";
import firebaseConfig from "../../../firebaseConfig";
import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll} from "firebase/storage"
// import { Video } from "expo-av";
// import { WebView } from 'react-native-webview';


const Program1 = () => {

  // const [videos, setVideos] = useState([]);

  
   useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, "PersonligUtveckling/");

    listAll(listRef)
      .then((res) => {
        
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
         // console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          console.log('item: ' + itemRef);
          console.log('name of file: ' + itemRef.name);
        });
      
      })
      .catch((error) => {
        
        console.log(error);
      });
  }, []);
  


  return (
      <View>

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
