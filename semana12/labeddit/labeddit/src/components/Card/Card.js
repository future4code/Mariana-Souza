import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const PostCard = (props) => {
  const history = useHistory();
  const post = props.post
  const onClickCard = (id) => {
    goToPost(history, id, props.post)
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea
        onClick={() => onClickCard(props.id)}
      >
        
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {props.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;