import React from "react";
import {View,ScrollView,Text,StyleSheet,TouchableOpacity,Button,} from "react-native";
import { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Video } from "expo-av";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import Sv from "../../languages/Sv";
import Eng from "../../languages/Eng";
import Ar from "../../languages/Ar";
import * as FileSystem from "expo-file-system";
import firebaseConfig from "../../../firebaseConfig";

const PersonligUtveckling = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [AudioUrls, setAudioUrls] = useState([]);
  const [PdfUrls, setPdfUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const language = useSelector((state) => state.language); //Hämta valt språk från redux store
  const translations = language === "Sv" ? Sv : language === "Ar" ? Ar : Eng; // Hämtar översättningen för de olika språken

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData("videos", "PersonligUtveckling/videos/", setVideoUrls);
      fetchData("audios", "PersonligUtveckling/audio/", setAudioUrls);
      fetchData("pdfs", "PersonligUtveckling/pdf/", setPdfUrls);
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = async (directoryName, storagePath, setUrls) => {
    try {
      const fileDirectory = `${FileSystem.cacheDirectory}${directoryName}/`;
      const fileInfo = await FileSystem.getInfoAsync(fileDirectory);
      console.log(fileInfo);
      if (!fileInfo.exists) {
        await FileSystem.makeDirectoryAsync(fileDirectory);
      }
      const storage = getStorage();
      const listRef = ref(storage, storagePath);
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const fileUri = `${fileDirectory}${itemRef.name}`;
          const fileInfo = await FileSystem.getInfoAsync(fileUri);
          if (!fileInfo.exists) {
            await FileSystem.downloadAsync(url, fileUri);
          }
          return fileUri;
        })
      );
      setUrls(urls);
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

  console.log("audios: " + AudioUrls.length);
  console.log("video: " + videoUrls.length);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
        {loading && videoUrls.length === 0 ? (
          <Text>No videos found</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text>Personlig Utveckling</Text>
        {!videoUrls.length ? (
          <Text>{translations.noVideo}</Text>
        ) : (
          <Text></Text>
        )}
        {!loading ? (
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
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}

        {!AudioUrls.length ? (
          <Text>{translations.noAudio}</Text>
        ) : (
          <Text></Text>
        )}
        {!loading ? (
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
            />
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}

        {!PdfUrls.length ? <Text>{translations.noPdf}</Text> : <Text></Text>}
        {!loading ? (
          PdfUrls.map((url, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.text}> {`PDF ${index + 1}`} </Text>
            </TouchableOpacity>
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center",
    marginBottom: 20,
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
    position: "absolute",
    left: 20,
    paddingTop: 30,
    // top: 75,
    // bottom: 0,
    justifyContent: "center",
  },
  button: {
    width: "60%",
    height: 50,
    marginBottom: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default PersonligUtveckling;
