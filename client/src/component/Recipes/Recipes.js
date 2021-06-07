import React, { useEffect } from 'react'
import './Recipes.css';
import CardComponent from '../Common/CardComponent'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import Loader from '../Main/Loader';





function Recipes({ przepisy, fetchRecipes, user, isCLicked }) {


  useEffect(() => {
    fetchRecipes();
  }, [isCLicked])

  return przepisy ? (
    <Grid container spacing={3}>
      {przepisy.map(przepis =>
        <Grid key={przepis._id} item xl={3} lg={3} md={3} sm={4} xs={12}>
          <CardComponent przepis={przepis} user={user} key={przepis._id} />
        </Grid>
      )}
    </Grid>) : (<Loader />)
}



Recipes.propTypes = {
  przepisy: PropTypes.array.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    przepisy: state.main.przepisy,
    isCLicked: state.main.favouriteClicked,
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
