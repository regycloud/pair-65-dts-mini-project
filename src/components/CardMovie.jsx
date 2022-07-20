import React from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Rating,
    Typography,
} from "@mui/material";
import './CardMovie.module.css'

const CardMovie = (props) => {
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

    return (
        <Card className="boxy">
            <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 0.2 }}
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          alt={props.movie.title}
        ></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        >
          <Typography component="div" variant="body1">
            {props.movie.title}
          </Typography>
          <Rating
            value={props.movie.vote_average / 2}
            precision={0.1}
            readOnly
          />
          <Typography variant="body2">
            Release date: {props.movie.release_date}
          </Typography>
          <Typography variant="body2">{props.movie.overview}</Typography>
        </CardContent>
      </Box>
        </Card>
    )
}

export default CardMovie;
