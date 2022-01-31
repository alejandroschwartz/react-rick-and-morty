import React, { useState, useMemo, useRef } from "react";

import Spinner from '../components/Spinner';
import useGetData from '../hooks/useGetData.js'
import SearchError from "../components/SearchError";
import Character from "../components/Character";
import "../styles/Characters.scss";
import Search from "../components/Search";

export default function Characters(props) {
  const API = (`https://rickandmortyapi.com/api/character/`)
  const { characters, loading } = useGetData(API)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)
  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }
  const filterCharacter = useMemo( () => characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search]
  )

  return (
    <div className="Characters">
      <div className="Characters__container">
        {loading && <Spinner/> }
        <Search 
          darkMode={props.darkMode} 
          search={search} 
          searchInput={searchInput} 
          handleSearch={handleSearch} 
        />
        {filterCharacter.length > 0 
          ? <>
              {filterCharacter.map((character) => (
                <Character 
                  darkMode={props.darkMode} 
                  character={character} 
                  key={character.id} 
                />
              ))}
            </>
          : <SearchError darkMode={props.darkMode} />
        }
      </div>
    </div>
  );
};
