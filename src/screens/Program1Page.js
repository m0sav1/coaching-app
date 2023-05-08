import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Program1Page = () => {
  const videoUrl = require("../../assets/video.mp4");
  const videoRef = React.useRef(null);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

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
        <Text style={{ fontSize: 20 }}>Text in the middle, here wil come some info about the corse
         that you chose to learn. I can give you credit already, you made a great decision by choosing 
         our application.------------------Marhaba bekom ana takallom belArabi showay whoway, Habibi come to DUBAI.</Text>
      </View>

      <View style={{ paddingBottom: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 20,
            borderRadius: 20,
            marginHorizontal: 30,
          }}
          onPress={() => navigation.navigate("PersonligUtveckling")}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Button to take you to the COURSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Program1Page;


