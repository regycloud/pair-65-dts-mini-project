import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import CardMovie from '../components/CardMovie'

const ListMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a152302fef97e3c7c20de9d4503c0e14");
                setMovies(response.data.results);
            }
            catch(err){
                console.log(err)
            }
        };
        fetchDataMovies();
    }, [])

    return(
        <Box className='boxy'>
            <Typography variant='h5'>
                List Movies
            </Typography>
            {movies.map((movie) => {
                return <CardMovie key={movie.id} movie={movie} />;
            })}
        </Box>
    )
}

export default ListMovies
