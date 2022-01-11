import React, { useState, useEffect, useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Characters.scss";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };
  const filteredUsers = useMemo( () => characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
  );

  return (
    <div className="Character">
      <div className="Character__containes">
        <div className="Search">
          <input
            className={
              props.darkMode ? "Search__inputLight" : "Search__inputDark"
            }
            type="text"
            value={search}
            ref={searchInput}
            placeholder="Buscar..."
            onChange={handleSearch}
          />
        </div>
        <>
          {filteredUsers.length > 0 ? (
            <>
              {filteredUsers.map((character) => (
                <div
                  className={
                    props.darkMode ? "CharacterLight" : "CharacterDark"
                  }
                  key={character.id}
                >
                  <NavLink to={`/react-rick-and-morty/${character.id}`}>
                    <div className="Character__image--container">
                      <img
                        className="Character__image"
                        src={character.image}
                        alt={character.name}
                      />
                    </div>
                    <div className="Character__details">
                      <h2 className="Character__details--h2">
                        {character.name}
                      </h2>
                    </div>
                  </NavLink>
                </div>
              ))}
            </>
          ) : (
            <>
              <h1 className={props.darkMode ? "ErrorLight" : "ErrorDark"} >
                No encontramos personajes que coincidan con tu búsqueda.
              </h1>{" "}
              <br />
              <i className="fas fa-search"></i>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Characters;