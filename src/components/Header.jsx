import React from "react";
import "../styles/Header.scss";

export default function Header(props) {
  const handleDarkMode = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <div className={props.darkMode ? "LightMode nav" : "DarkMode nav"}>
      <div className="header__title">
        <h1>Rick and Morty</h1>
        <p>by Alejandro Schwartz</p>
      </div>
      <button className="btn" onClick={handleDarkMode}>
        {props.darkMode ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
}
