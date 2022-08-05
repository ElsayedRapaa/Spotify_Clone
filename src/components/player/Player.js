import React from "react";
import "./player.css";
// Components
import Footer from "../footer/Footer";
import Body from "../sidebar&body/Body";
import Sidebar from "../sidebar&body/Sidebar";

export default function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <div className="palyer_footer">
        <Footer />
      </div>
    </div>
  );
}
