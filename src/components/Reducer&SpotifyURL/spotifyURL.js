// Acount URL
const AccountURL = "https://accounts.spotify.com/authorize";
// Client ID
const clientID = "1c7f766a37cd46df92b86027caf18b52";
// Redirect Web Page Loalhost URI
const redirectURI = "http://localhost:3000/";
// Scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Get Token URL
export const getTokenURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// Go To Spotify LOGIN
export const loginURL = `${AccountURL}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
