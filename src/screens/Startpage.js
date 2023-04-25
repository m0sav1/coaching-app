//import { View, Dimensions } from 'react-native';
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
        style={{ width: width, height: height }}
        resizeMode="cover"
        fullscreen={false}
        paused={false}
        disableFullscreen={true}
        useNativeControls={false}
        isMuted={true}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
    </View>
  )
}

export default StartPage;
