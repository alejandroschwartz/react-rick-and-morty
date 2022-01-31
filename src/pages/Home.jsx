import React from "react";

import Header from '../components/Header';
import Characters from "../containers/Characters";
import Footer from '../components/Footer';
import SvgFooter from "../components/SvgFooter";
import { Helmet } from "react-helmet";

export default function Home({ darkMode, setDarkMode }) {
  let bg = darkMode ? "bg-lightMode" : "bg-darkMode"

  return (
    <>
      <Helmet>
        <title>Inicio - Rick and Morty app | Alejandro Schwartz</title>
        <meta name="description" content="Esta página lista los personajes del programa Rick and Morty, trayendolo de una API." />
      </Helmet>
      <div className={"App " + bg}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Characters darkMode={darkMode} />
        <SvgFooter />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}