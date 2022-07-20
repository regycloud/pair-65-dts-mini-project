import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import ListMovies from './containers/ListMovies';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ListMovies  />
    </div>
  );
}

export default App;
