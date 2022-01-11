import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import "../styles/Player.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SvgFooter from "../components/SvgFooter";

export default function Player({ darkMode, setDarkMode }) {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);
  let bg = darkMode ? "bg-lightMode" : "bg-darkMode";
  let bgCard = darkMode ? "PlayerLight" : "PlayerDark";
  let bgBtn = darkMode ? "Btn-Light" : "Btn-Dark";

  return (
    <div className={"App " + bg}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="Player">
        <NavLink to="/react-rick-and-morty">
          <button className={bgBtn} type="button">
            Volver
          </button>
        </NavLink>
        <div className="Player__container">
          <div className={bgCard}>
            <div className="Player__image--container">
              <img
                className="Player__image"
                src={characters.image}
                alt={characters.name}
              />
            </div>
            <div className="Player__details">
              <h2 className="Player__details--h2">Nombre: {characters.name}</h2>
              <p className="Player__details--p">Género: {characters.gender}</p>
              <p className="Player__details--p">
                Especie: {characters.species}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SvgFooter />
      <Footer darkMode={darkMode} />
    </div>
  );
};