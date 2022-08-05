import React from "react";
import "./body.css";
import { AiOutlineSearch } from "react-icons/ai";
import BodyPlaylist from "../body_playlist/BodyPlaylist";
import { useDataValue } from "../Reducer&SpotifyURL/SpotifyData";

export default function Body() {
  const [{ user }] = useDataValue();

  return (
    <div className="body">
      <div className="body_header">
        <div className="body_search">
          <AiOutlineSearch className="body_search_icon" />
          <input type="text" placeholder="Search For Artists, Songs" />
        </div>
        <div className="body_user">
          <img src={user?.images[0]?.url} alt="avatar_user" />
          <p>{user?.display_name}</p>
        </div>
      </div>
      <div className="body_content">
        <BodyPlaylist />
      </div>
    </div>
  );
}
