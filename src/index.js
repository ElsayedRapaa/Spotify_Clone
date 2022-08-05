import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import SpotifyData from "./components/Reducer&SpotifyURL/SpotifyData";
import reducer, {
  initialState,
} from "./components/Reducer&SpotifyURL/Reducer&Redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <SpotifyData initialState={initialState} reducer={reducer}>
    <App />
  </SpotifyData>
);
