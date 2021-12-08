import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";
import React, { useState } from "react";
import "./Videosidebar.css";

function Videosidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videosidebar">
      <div className="videosidebar_button">
        {liked ? (
          <Favorite fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar_button">
        <Message fontSize="large" />
        <p>{shares}</p>
      </div>
      {/* <div className="videosidebar_button">
        <ThumbUp fontSize="large" />
        <p>{unlike}</p>
      </div> */}
      <div className="videosidebar_button">
        <Share fontSize="large" />
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default Videosidebar;
