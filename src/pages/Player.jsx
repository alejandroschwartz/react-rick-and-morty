import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/Player.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SvgFooter from "../components/SvgFooter";
import Spinner from "../components/Spinner";
import Item from "../components/Item";
import useSingleData from "../hooks/useSingleData";
import { Helmet } from "react-helmet";

export default function Player({ darkMode, setDarkMode }) {
  const { id } = useParams();
  const API = (`https://rickandmortyapi.com/api/character/${id}`)
  const { characters, loading } = useSingleData(API)
  let bg = darkMode ? "bg-lightMode" : "bg-darkMode";
  let bgCard = darkMode ? "PlayerLight" : "PlayerDark";
  let bgBtn = darkMode ? "Btn-Light" : "Btn-Dark";


  return (
    <>
      <Helmet>
        <title> Personaje - Rick and Morty app | Alejandro Schwartz</title>
        <meta name="description" content="Esta página trae un personaje por /:id de la API de Rick and Morty." />
      </Helmet>
      <div className={"App " + bg}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        { loading && <Spinner/> }
        <Item bgCard={bgCard} bgBtn={bgBtn} characters={characters} />
        <SvgFooter />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};