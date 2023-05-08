import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { setLanguage } from '../languages/store';

const StartPage = () => {
  const videoUrl = require("../../assets/video.mp4");
  const videoRef = React.useRef(null);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const [languageSelected, setLanguageSelected] = useState(false);
  const dispatch = useDispatch();

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      navigation.navigate("HomePage", { language: language });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [videoRef]);

  const handleLanguageButtonPress = () => {
    setLanguageSelected(true);
  };

  // Hanterar användarens språkval och skickar med det valda språket som en parameter
  // Navigerar till homepage efter språk är valt
  const handleChoosenLanguagePress = (language) => {
    setLanguageSelected(false);
    dispatch(setLanguage(language));
    navigation.navigate("HomePage", { language: language});
    videoRef.current.pauseAsync();

  };


  // Renderar cirkel knapparna
  const renderLanguageOptions = () => {
    return (
      <View style={styles.circlesContainer}>
        <TouchableOpacity style={styles.circle}  onPress={() => handleChoosenLanguagePress('Eng')}>
          <Text style={styles.circleLanguageText}>Eng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => handleChoosenLanguagePress('Sv')}>
          <Text style={styles.circleLanguageText}>Sv</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}  onPress={() => handleChoosenLanguagePress('Ar')}>
          <Text style={styles.circleLanguageText}>Ar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Denna funktion hanterar om språkval eller text ska visas ovanför languageButton knappen
  const renderTextOverButton = () => {
    if (languageSelected) {
      return (
        <View style={styles.circlesContainer}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
      );
    } else {
      return (
        <Text style={styles.textOverButton}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      );
    }
  };

  // styling
  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={videoRef}
        source={videoUrl}
        style={{ width: width, height: height }}
        resizeMode="cover"
        fullscreen={false}
        paused={false}
        disableFullscreen={true}
        useNativeControls={false}
        isMuted={true}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
       {renderTextOverButton()}
      <TouchableOpacity style={styles.languageButton} onPress={handleLanguageButtonPress}>
      <Text style={{ color: "white", fontSize: 18 }}> Choose language </Text>
      </TouchableOpacity>
      {languageSelected && renderLanguageOptions()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  circlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 180,
    width: '100%',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLanguageText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  textOverButton: {
    marginVertical: 20,
    position: "absolute",
    bottom: 140, 
    zIndex: 1,
    fontSize: 16, 
    color: "white",
    textAlign: "center"
  }, 
  languageButton: {
    position: "absolute",
    alignSelf: 'center',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 95,
    padding: 10,
    borderRadius: 5,
    height: 50,
    backgroundColor: "#8938EB",
  },
});

export default StartPage;
