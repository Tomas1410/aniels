import React, { useEffect } from 'react'
import './Ulubiony.module.css';
import CardComponent from '../Common/CardComponent'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchUlubione } from '../../actions/ulubioneActions'
import PropTypes from 'prop-types'
import Loader from '../Main/Loader';
import { useDispatch } from 'react-redux';


function Ulubione({ przepisy, fetchUlubione, isLoading, user }) {

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchUlubione(user.name))
    } catch (error) {
      console.log('useEffect error:', error)
    }

  }, [isLoading])

  return przepisy ? (
    <React.Fragment>
      <h1>Ulubione przepisy</h1>
      <Grid container spacing={2}>
        {przepisy.map(przepis =>
          <Grid key={przepis._id} item xl={3} lg={3} md={3} sm={4} xs={12}>
            <CardComponent przepis={przepis} />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  ) : (<Loader />)
}

Ulubione.propTypes = {
  przepisy: PropTypes.array.isRequired,
  fetchUlubione: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    przepisy: state.ulubione.przepisy,
    isFetching: state.ulubione.isFetching,
    user: state.auth.user,
    isLoading: state.auth.isLoading
  }
}


export default connect(mapStateToProps, { fetchUlubione })(Ulubione)