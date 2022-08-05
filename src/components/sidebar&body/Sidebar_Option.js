import React from "react";
import { useDataValue } from "../Reducer&SpotifyURL/SpotifyData";
import "./sidebar_option.css";

export default function SidebarOption({ Icon, title, items }) {
  const [{ item, playing }, dispatch] = useDataValue();

  const getId = () => {
    dispatch({
      type: "SET_ITEM",
      item: items,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  };
  console.log(item, playing);

  return (
    <div className="side_option" onClick={() => getId()}>
      {Icon && <Icon className="sidebar_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
