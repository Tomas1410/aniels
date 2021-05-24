import React from 'react'
import './Ulubiony.module.css';
import CardComponent from '../Common/CardComponent'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 100,
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));



export default function Ulubiony() {
  const classes = useStyles();
  return (

    <React.Fragment>
      <div className={classes.root}>
 <h1>Ulubione przepisy</h1>
        <Grid container spacing={2}>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
          <Grid item xl={3} lg={4} md={3} sm={3} xs={12}>
            <CardComponent />
          </Grid>
         
         
         
        </Grid>
      </div>
    </React.Fragment>

  )
}