import React, { useEffect, useState } from 'react'
import './Recipes.css';
import CardComponent from '../Common/CardComponent'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import Loader from '../Main/Loader';





function Recipes({ przepisy, fetchRecipes }) {


  useEffect(() => {
    fetchRecipes();
  }, [])

  // return przepisy ? (przepisy.map(przepis => <p>{przepis.tytul}</p>)) : (<Loader />)
  // <Grid container spacing={3}>
  //         <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
  //           <CardComponent />
  //         </Grid>

  // </Grid>
  return przepisy ? (
    <Grid container spacing={3}>
      {przepisy.map(przepis =>
        <Grid key={przepis._id} item xl={3} lg={3} md={3} sm={4} xs={12}>
          <CardComponent przepis={przepis} />
        </Grid>
      )}
    </Grid>) : (<Loader />)


  // return przepisy[11] ? (
  //   < CardComponent przepis={przepisy[11]} />) : (<Loader />)




}



Recipes.propTypes = {
  przepisy: PropTypes.array.isRequired,
  fetchRecipes: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    przepisy: state.main.przepisy
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
