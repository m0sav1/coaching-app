import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";


const Program1Page = ({ program1Description }) => {
  const videoUrl = require("../../assets/video.mp4");
  const videoRef = React.useRef(null);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  console.log(program1Description);

  const language = useSelector((state) => state.language); //Hämta valt språk från redux store
 // const translations = language === 'Sv' ? Sv : language === 'Ar' ? Ar : Eng; // Hämtar översättningen för de olika språken

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
    videoRef.current.replayAsync();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [videoRef]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, height: height/2 }}>
        <Video
          ref={videoRef}
          source={videoUrl}
          style={{ width: width, height:height/2}}
          resizeMode="cover"
          fullscreen={false}
          paused={false}
          disableFullscreen={true}
          useNativeControls={false}
          isMuted={true}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "black" }}>{program1Description}</Text>
      </View>

      <View style={{ paddingBottom: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginHorizontal: 20,
          }}
          onPress={() => navigation.navigate("PersonligUtveckling")}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Tryck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Program1Page;
