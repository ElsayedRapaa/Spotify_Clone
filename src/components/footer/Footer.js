import React, { useState } from "react";
import "./footer.css";
import { BsShuffle } from "react-icons/bs";
import { FaStepBackward } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import { RiPlayListFill } from "react-icons/ri";
import { ImVolumeMedium } from "react-icons/im";

export default function Footer() {
  const [volume, setVolume] = useState(50);
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.pinimg.com/236x/2c/2c/97/2c2c97c0075851115592b00746132546.jpg"
          alt="avatar_user"
        />
        <div className="footer_leftinfo">
          <h4 className="footer_songname">Cukur</h4>
          <small>Yamace</small>
        </div>
      </div>
      <div className="footer_center">
        <BsShuffle className="shuffel" />
        <FaStepBackward className="back" />
        <BsFillPlayCircleFill className="play" />
        <FaStepBackward className="next" />
        <ImLoop2 className="loop" />
      </div>
      <div className="footer_right">
        <RiPlayListFill className="footer_righticon" />
        <ImVolumeMedium className="footer_righticon" />
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            backgroundImage: `linear-gradient(#1db954, #1db954)`,
            backgroundSize: `${volume}% 100%`,
            backgroundRepeat: `no-repeat`,
          }}
        />
      </div>
    </div>
  );
}
