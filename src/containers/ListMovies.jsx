import React, { useEffect, useState } from 'react';
import tmdb from '../apis/axios'
import { Box, Typography } from '@mui/material';
import CardMovie from '../components/CardMovie';

const ListMovies = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchDataMovies = async () => {
        try {
          const response = await tmdb.get(
            "/movie/popular"
          );
          setMovies(response.data.results);
        } catch(err) {
          console.log(err);
        }
      };
      fetchDataMovies();
    }, []);
  
    return (
      <Box sx={{ padding: "1em", border:2, background:"black"}}>  
      <Typography variant='h4' sx={{color: 'whitesmoke'}}>Popular Movie List</Typography>
        <Box
          component="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            marginBottom: "1em",
            marginTop: '1em',
            width: '100%'
          }}
        >
          {movies.slice(0, movies.length - 2).map((movie) => {
            return <CardMovie movie={movie} key={movie.id} />;
          })}
          </Box>
      </Box>
    );
  };

export default ListMovies
