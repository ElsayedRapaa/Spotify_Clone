import React from "react";
import { useDataValue } from "../Reducer&SpotifyURL/SpotifyData";
import "./header.css";

export default function Header() {
  const [{ item, playing }] = useDataValue();

  return (
    <div>
      {playing && (
        <div className="header_playlist">
          <img src={item?.images[0]?.url} alt="playlist_photo" />
          <div className="playlist_info">
            <strong>PLAYLIST</strong>
            <h1>{item?.name}</h1>
            <p>{item?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
