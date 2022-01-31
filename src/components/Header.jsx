import React from "react";
import "../styles/Header.scss";

export default function Header(props) {
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem('darkMode', value)
      props.setDarkMode(value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={props.darkMode ? "LightMode nav" : "DarkMode nav"}>
      <div className="header__title">
        <h1>Rick and Morty</h1>
        <p>by Alejandro Schwartz</p>
      </div>
      <button className="btn" onClick={() => setLocalStorage(!props.darkMode)}>
        {props.darkMode 
          ? <p><i className="fas fa-moon"></i>  Dark</p> 
          : <p><i className="far fa-moon"></i>  Light</p>
        }
      </button>
    </div>
  );
}
