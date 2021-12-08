import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [videos, setVideos] = useState([]);
  const usersCollectionref = collection(db, "videos");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionref);
      setVideos(data.docs.map((doc) => doc.data()));
    };
    getUsers();
  }, [usersCollectionref]);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
