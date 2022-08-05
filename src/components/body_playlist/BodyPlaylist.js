import React from "react";
import "./bodyplaylist.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDataValue } from "../Reducer&SpotifyURL/SpotifyData";
import Header from "./Header";
import { AiFillHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

export default function BodyPlaylist() {
  const [{ music, item, cukur }] = useDataValue();

  return (
    <div className="body_playlist">
      <Header />
      <div className="content_playlist">
        <div className="playlist_icon">
          <AiFillPlayCircle className="playlist_play" />
          <FiMoreHorizontal className="playlist_more" />
        </div>
        {!item ? (
          <div className="playlist_item">
            {music?.tracks?.items?.map((item) => (
              <div key={item?.track?.id}>
                <div className="playlist_songs">
                  <img
                    src={item?.track?.album?.images[0]?.url}
                    alt="song_img"
                  />
                  <div className="playlist_songinfo">
                    <h4>{item?.track?.album?.name}</h4>
                    <p>{item?.track?.album?.artists[0]?.name}</p>
                  </div>
                  <div className="playlist_song_icons">
                    <AiFillHeart className="song_heart" />
                    <BsPlayFill className="song_play" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="playlist_item">
            {cukur?.tracks?.items?.map((item) => (
              <div key={item?.track?.id}>
                <div className="playlist_songs">
                  <img
                    src={item?.track?.album?.images[0]?.url}
                    alt="song_img"
                  />
                  <div className="playlist_songinfo">
                    <h4>{item?.track?.album?.name}</h4>
                    <p>{item?.track?.album?.artists[0]?.name}</p>
                  </div>
                  <div className="playlist_song_icons">
                    <AiFillHeart className="song_heart" />
                    <BsPlayFill className="song_play" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
