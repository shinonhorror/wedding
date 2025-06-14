import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import pizza from '../../../../assets/music/pizza.mp3';
import kiss from '../../../../assets/music/kiss.mp3';
import love_me from '../../../../assets/music/love_me.mp3';
import noize from '../../../../assets/music/noize.mp3';
import troll from '../../../../assets/music/troll.mp3';
import machete from '../../../../assets/music/machete.mp3';
import maroon from '../../../../assets/music/maroon.mp3';

import { useEffect, useState } from 'react';

const playlist = [
  { src: pizza },
  { src: machete },
  { src: maroon },
  { src: love_me },
  { src: noize },
  { src: troll },
  { src: kiss },
];

const Player = () => {
  const [currentTrack, setTrackIndex] = useState(0);
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <>
      <AudioPlayer
        src={playlist[currentTrack].src}
        onClickNext={handleClickNext}
        showSkipControls
        volume={0}
        showJumpControls={false}
        onEnded={handleEnd}
        autoPlay
        loop={true}
        autoPlayAfterSrcChange
      />
    </>
  );
};

export default Player;
