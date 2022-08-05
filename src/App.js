import React, { useEffect } from "react";
import { getTokenURL } from "./components/Reducer&SpotifyURL/spotifyURL";
import { useDataValue } from "./components/Reducer&SpotifyURL/SpotifyData";

// Components
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyAPI = new SpotifyWebApi();

export default function App() {
  const [{ token }, dispatch] = useDataValue();

  useEffect(() => {
    // Get access_token
    const hash = getTokenURL();

    // Return Hash Null
    window.location.hash = "";

    // access_token
    const access_token = hash.access_token;

    if (access_token) {
      dispatch({
        type: "SET_TOKEN",
        token: access_token,
      });
      spotifyAPI.setAccessToken(access_token);
      spotifyAPI.getMe().then((_user) => {
        dispatch({
          type: "SET_USER",
          user: _user,
        });
      });
      spotifyAPI.getUserPlaylists().then((_playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: _playlists,
        });
      });
      spotifyAPI.getPlaylist("5ZC1nEzCWjGaAIQrHgj5fQ").then((_music) => {
        dispatch({
          type: "SET_MUSIC",
          music: _music,
        });
      });
      spotifyAPI.getPlaylist("73E8GedhhicOP2t4Ex1e5u").then((_cukur) => {
        dispatch({
          type: "SET_CUKUR",
          cukur: _cukur,
        });
      });
    }
  });

  return <div>{token ? <Player /> : <Login />}</div>;
}
