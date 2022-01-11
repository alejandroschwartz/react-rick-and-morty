import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import ThemeContext from './context/ThemeContext';

// ReactDOM.render( 
//   <React.StrictMode>
//     <ThemeContext.Provider value="red" >
//       <App />
//     </ThemeContext.Provider>
//   </React.StrictMode>, 
//   document.getElementById('app') 
// );

ReactDOM.render(
  <App />, 
  document.getElementById('app') 
);