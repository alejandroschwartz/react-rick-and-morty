import { useState, useEffect } from 'react'

export default function useGetData( API ) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    fetch( API )
      .then((response) => response.json())
      .then((data) => { 
        setCharacters(data.results)
        setLoading(false)
      });
  }, []);

  return { characters, loading }
}
