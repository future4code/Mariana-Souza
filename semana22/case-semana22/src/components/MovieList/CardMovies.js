import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@material-ui/core';
import { ContainerMovie } from './styled';
import { BASE_URL } from '../../constants/urls';


 const MovieCard = (props) => {
  return (
    <ContainerMovie>
      <CardActionArea>
        <CardMedia
          component="img"
          height="264"
          width="176"
          image={`https://image.tmdb.org/t/p/w200${props.img}`}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ContainerMovie>
  );
}

export default MovieCard