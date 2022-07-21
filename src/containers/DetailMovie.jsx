// di sini kita import apis/tmdb.js
import tmdb from "../apis/axios";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import darkTheme from "../themes/theme";
import { ThemeProvider } from '@mui/material/styles';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DetailMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const MovieID = params.MovieID;

    const fetchDataMovies = async () => {
      try {
        const response = await tmdb.get(
          `/movie/${MovieID}`
        );
        setMovies(response.data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, );

  return (
    <ThemeProvider theme={darkTheme}>
    <NavBar />
    <Card sx={{ borderRadius: 0, background: 'black', minHeight:'90vh', paddingTop: '10vh'}}>
      <Box className="boxy" sx={{ padding: '2em' }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", margin: 'auto', width: '70em' }}>
          <Box className="boxy" sx={{ width: "18em", paddingLeft: 15 }}>
            <CardMedia
              component="img"
              image={`${baseUrlForMovie}${movies.poster_path}`}
              alt={movies.title}
              sx={{borderRadius: 10}}
            ></CardMedia>
          </Box>

          <Box className="boxy" sx={{ width: "100%", textAlign: "left", marginLeft: '-3em' }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              {movies.title}
            </Typography>
            <br />
            <Typography>Release Date : {movies.release_date}</Typography>
            <Rating value={movies.vote_average / 2} precision={0.1} readOnly /> <div>{movies.vote_average / 2 } of 5 </div>
            <br />
            <Typography sx={{fontStyle:"italic"}}> {movies.tagline}</Typography>
            <br />
            <Typography>Overview : {movies.overview}</Typography>
            <br />
            <Typography>Language : {movies.original_language}</Typography>
            <Typography>Trailer: </Typography>
            <div style={{border:3}}>
    <iframe
      width="480"
      height="320"
      src={`https://www.youtube.com/embed/RtRiWBSqTgQ`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="video"
    />
  </div>
          </Box>
        </Box>
      </Box>
    </Card>
    <Footer sx={{margin: 0}} />
    </ThemeProvider>
  );
};

export default DetailMovie;
