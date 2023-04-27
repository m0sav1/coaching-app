import { View, Dimensions, TouchableOpacity,Text} from 'react-native';
import { Video } from 'expo-av';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const StartPage = () => {
  const videoUrl = require('../../assets/video.mp4');
  const videoRef = React.useRef(null);
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      navigation.navigate('LoginPage');
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [videoRef]);
    

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={videoRef}
        source={ videoUrl }
        style={{ width:width, height:height}}
        resizeMode="cover"
        fullscreen={false}
        paused={false}
        disableFullscreen={true}
        useNativeControls={false}
        isMuted={true}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: height / 2 - 25,
          left: width / 2 - 50,
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={{ fontSize: 18 }}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartPage;
