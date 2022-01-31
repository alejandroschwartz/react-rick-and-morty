import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Character.scss'

export default function Character({ darkMode, character }) {
  return (
    <div className={darkMode ? "CharacterLight" : "CharacterDark"} >
      <NavLink className="Character__link" to={`/${character.id}`}>
        <div className="Character__image--container">
          <img
            className="Character__image"
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className="Character__details">
          <h2 className="Character__details--h2">{character.name}</h2>
        </div>
      </NavLink>
    </div>
  );
}
