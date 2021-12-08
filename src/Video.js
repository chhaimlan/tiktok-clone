import React, { useRef, useState } from "react";
import "./Video.css";
import Videofooter from "./Videofooter";
import Videosidebar from "./Videosidebar";
import { Player } from "video-react";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      {/* video */}
      {/* <img
        className="video_player"
        onClick={onVideoPress}
        loop
        ref={videoRef}
        src={url}
      >

      </img> */}
      <Player
        className="video_player"
        onClick={onVideoPress}
        playsInline
        poster="img/poster.png"
        loop
        ref={videoRef}
        src={url}
      />
      <Videofooter channel={channel} description={description} song={song} />
      <Videosidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
