import React from 'react'
import '../styles/SearchError.scss'

export default function SearchError({ darkMode }) {
  return (
    <>
      <h1 className={darkMode ? "ErrorLight" : "ErrorDark"}>
        No encontramos personajes que coincidan con tu búsqueda.
      </h1>{" "}
      <br />
      <i className="fas fa-search"></i>
    </>
  );
}
