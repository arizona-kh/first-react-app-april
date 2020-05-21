import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    CardActionArea,
    CardActions,
    CardContent,
    Button,
    Typography,
    Card
} from '@material-ui/core';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  let url = 'https://giphy.com/videos/afv-americas-funniest-home-videos-look-out-below-mFZKg6u6DBz1CrEHxI';

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.alt}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </CardActions>
    </Card>
  );
}