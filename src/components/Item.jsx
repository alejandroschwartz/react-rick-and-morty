import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Item({ bgCard, bgBtn, characters }) {
  return (
    <div className="Player">
      <NavLink to="/">
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
            <p className="Player__details--p">Especie: {characters.species}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
