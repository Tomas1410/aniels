import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import FavouriteDeleteForm from './FavouriteDeleteForm';
import FavouriteAddForm from './FavouriteAddForm';

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

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <Link to={'details/' + props.przepis._id} style={{ textDecoration: 'none' }}><CardActionArea>
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
        </Link>


        <CardActions>


          {props.user && props.user.name ? (props.przepis.ulubione.includes(props.user.name) ?
            <FavouriteDeleteForm username={props.user.name} przepisId={props.przepis._id} /> : <FavouriteAddForm username={props.user.name} przepisId={props.przepis._id} />
          ) : ('')
          }

        </CardActions>
      </Card >

    </React.Fragment>
  )
}




