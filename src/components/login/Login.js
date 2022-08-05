import React from "react";
import "./login.css";
import { loginURL } from "../Reducer&SpotifyURL/spotifyURL";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="login_logo"
      />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
