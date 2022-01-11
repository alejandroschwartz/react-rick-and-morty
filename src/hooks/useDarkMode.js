import { useState } from 'react';

const useDarkMode = () => {
  const [state, setState] = useState(false);

  const darkTheme = () => {
    setState(!state);
    console.log(state)
  }
  
  return state;
}

export default useDarkMode;