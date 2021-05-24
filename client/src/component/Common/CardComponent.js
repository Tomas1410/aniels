import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lazania from '../../static/recipes/lazania.png';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Loader from '../Main/Loader';




const useStyles = makeStyles({
  root: {
    maxWidth: '100vw',
    minHeight: 300
  },
  media: {
    height: 140,
  },
});
export default function CardComponent(props) {



  const classes = useStyles();
  return props ? (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={'assets/' + props.przepis.img}
          title={props.przepis.tytul}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.przepis.tytul}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.przepis.krotki_opis}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Link to={'details/' + props.przepis._id}>Przeczytaj wiecej </Link>

      </CardActions>
    </Card >
  ) : (<Loader />)

}

