import React from 'react'
import RecommendStyles from './Recommend.module.css';

import Loader from './Loader'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: '100vw',
    minHeight: 300
  },
  media: {
    height: 140,
  },
});
export default function Recommend(props) {

  const classes = useStyles();
  return (
    <div className={RecommendStyles.Container}>
      <h1 className={RecommendStyles.Zapchaj}>s</h1>
      <h1 className={RecommendStyles.title} >{props.t}</h1>
      <Grid container spacing={3}>
        {props.recipes ? (props.recipes.map(przepis => (
          <Grid key={przepis._id} item xl={3} lg={3} md={3} sm={4} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={'assets/' + przepis.img}
                  title={przepis.tytul}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {przepis.tytul}
                  </Typography>

                </CardContent>
              </CardActionArea>

              <CardActions>
                <Link to={'details/' + przepis._id}>Przeczytaj wiecej </Link>
              </CardActions>
            </Card >
          </Grid>

        ))) : (<Loader />)}
      </Grid>

    </div>

  )
}
