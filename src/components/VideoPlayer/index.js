import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './styles.scss';
export const VideoPlayer = () => {
  const earthGangUrl = 'https://youtu.be/skw3kUycvpo?t=36';
  const stormzyUrl =
    'https://www.youtube.com/watch?v=9ClYy0MxsU0&ab_channel=Stormzy';
  const fkaTwigsUrl =
    'https://www.youtube.com/watch?v=WEJRyBWpuvA&ab_channel=FKAtwigs';
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(stormzyUrl);
  return (
    <div className="videoplayer">
      <ReactPlayer
        url={selectedVideoUrl}
        muted
        playing
        controls={false}
        width="100%"
        height="880px"
      />
      <div className="videoplayer__buttons">
        <button
          className="videoplayer__button"
          onMouseEnter={() => setSelectedVideoUrl(stormzyUrl)}
        >
          Stormzy
        </button>
        <button
          className="videoplayer__button"
          onMouseEnter={() => setSelectedVideoUrl(earthGangUrl)}
        >
          EarthGang
        </button>

        <button
          className="videoplayer__button"
          onMouseEnter={() => setSelectedVideoUrl(fkaTwigsUrl)}
        >
          FKA Twigs
        </button>
      </div>
    </div>
  );
};
