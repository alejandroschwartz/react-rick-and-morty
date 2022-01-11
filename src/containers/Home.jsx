import React from "react";

import Header from '../components/Header';
import Characters from "../components/Characters";
import Footer from '../components/Footer';
import SvgFooter from "../components/SvgFooter";

export default function Home({ darkMode, setDarkMode }) {
  let bg = darkMode ? "bg-lightMode" : "bg-darkMode"

  return (
    <div className={"App " + bg}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Characters darkMode={darkMode} />
      <SvgFooter />
      <Footer darkMode={darkMode} />
    </div>
  );
}