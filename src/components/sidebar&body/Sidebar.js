import React from "react";
import "./sidebar.css";
import SidebarOption from "./Sidebar_Option";

// React Icons
import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { useDataValue } from "../Reducer&SpotifyURL/SpotifyData";

export default function Sidebar() {
  const [{ playlists }] = useDataValue();

  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="sidebar_logo"
      />
      <div className="sidebar_option">
        <SidebarOption Icon={BiHomeAlt} title="Home" />
        <SidebarOption Icon={BiSearch} title="Search" />
        <SidebarOption Icon={BiLibrary} title="Your Library" />
        <br />
        <strong>PLAYLISTS</strong>
        <hr />
        <div className="sidebar_option_playlsts">
          {playlists?.items?.map((item) => (
            <div key={item.id}>
              <SidebarOption title={item.name} items={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
