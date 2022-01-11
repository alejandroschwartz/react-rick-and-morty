import React from "react";
import "../styles/Footer.scss";
import SvgFooter from "./SvgFooter";

export default function Footer() {
  return (
    <footer className="footer">
      <SvgFooter />
      <div className="footer__div">
        <p className="footer__div--p">
          Diseño de página: <br /> <br />
          <strong>Alejandro Matías Schwartz</strong> <br />
          <small>Ciudad de Córdoba, Argentina</small>
        </p>
      </div>
    </footer>
  );
}
