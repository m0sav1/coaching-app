import { View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';

/** TODO
 * Fixa att videon är responsiv/passar skärmen
 * 
 */

const Startpage = () => {
  const videoUrl = require('../../assets/video.mp4');
  const videoRef = React.useRef(null);
  const { width, height } = Dimensions.get('window');

  /* Startar video när applikationen öppnas */
  const handleVideoLoad = () => {
    videoRef.current.playAsync();
  }
  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={videoRef}
        source={ videoUrl }
        style={{ width: width, height: height }} /*flex 1*/
        resizeMode="cover" //contain
        fullscreen={false}
        paused={false}
        disableFullscreen={true}
        useNativeControls={false}
        isMuted={true}
        onLoad={handleVideoLoad}
      />
    </View>
  )
}

export default Startpage
