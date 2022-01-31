import { useState, useEffect } from 'react'

export default function useSingleData( API ) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(API)
    .then((response) => response.json())
    .then((data) => { 
      setCharacters(data)
      setLoading(false)
    });
  }, []);

  return { characters, loading }
}