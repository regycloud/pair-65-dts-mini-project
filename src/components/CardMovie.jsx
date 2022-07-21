import React from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Rating,
    Typography,
} from "@mui/material";
import './CardMovie.module.css';
import { Link } from 'react-router-dom';

const CardMovie = (props) => {
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

    return (
      <Card className="boxy" sx={{ margin: '5px' }}>
      <Link style={{ textDecoration: "none", color:'white' }} to={`/DetailMovie/${props.movie.id}`}>
        <Box className="boxy">
          <CardMedia
            component="img"
            image={`${baseUrlForMovie}${props.movie.poster_path}`}
            alt={props.movie.title}
          ></CardMedia>
          <CardContent>
            <Typography>
              {props.movie.title}
            </Typography>
            <Typography>
              ({props.movie.release_date.slice(0,4)})
            </Typography>
            <Rating
              value={props.movie.vote_average / 2}
              precision={0.1}
              readOnly
            />
          </CardContent>
        </Box>
      </Link>
    </Card>
    )
}

export default CardMovie;
