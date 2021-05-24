import React, { Component } from "react";
import MainStyles from "./Main.module.css";
import Hotfood from "./Hotfood";
import Introduction from "./Introduction";
import Recommend from "./Recommend";
import News from "./News";
import Loader from "./Loader";
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import PropTypes from 'prop-types'

class Main extends Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className={MainStyles.Container}>

        { this.props.przepisy[0] ?
          (
            <React.Fragment>
              <Hotfood recipes={this.props.przepisy[0]} />
              <Introduction />
              <div className={MainStyles.lineBreak}></div>
              <Recommend
                t="Polecane przepisy"
                recipes={[
                  this.props.przepisy[0],
                  this.props.przepisy[1],
                  this.props.przepisy[2],
                  this.props.przepisy[3],
                ]}
              />
              <News
                t="Nowe przepisy"
                recipes={[
                  this.props.przepisy[4],
                  this.props.przepisy[5],
                  this.props.przepisy[6],
                  this.props.przepisy[7]
                ]} />
            </React.Fragment>) : (<Loader />)}


        {/* console.log(this.props.przepisy)} */}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  //prop_name:state.reducernamedefinedinROOT.stateName
  przepisy: state.main.przepisy
})

Main.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  przepisy: PropTypes.array.isRequired

}

export default connect(mapStateToProps, { fetchRecipes })(Main)
