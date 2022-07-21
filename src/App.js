import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import ListMovies from './containers/ListMovies';
import darkTheme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>  
      <div className="App">
        <NavBar />
        <HomePage />
        <ListMovies  />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
