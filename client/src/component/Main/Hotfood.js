import React, { Component } from "react";
import HotfoodStyles from "./Hotfood.module.css";
import CardMedia from "@material-ui/core/CardMedia";
import moment from "moment";
import 'moment/locale/pl'  // without this line it didn't work
moment.locale('pl')

export default class Hotfood extends Component {
  constructor(props) {
    super(props);

    this.state = { danie_dnia: [] };
  }
  componentDidMount() {
    this.setState({ danie_dnia: this.props.recipes });
  }

  render() {

    const today = moment().utc().format('D MMMM YYYY')


    const dzien = function (day) {
      if (day === 1) return "Poniedziałek";
      if (day === 2) return "Wtorek";
      if (day === 3) return "Środa";
      if (day === 4) return "Czwartek";
      if (day === 5) return "Piątek";
      if (day === 6) return "Sobota";
      if (day === 7) return "Niedziela";
    };
    return (
      <div className={HotfoodStyles.Container}>
        <div className={HotfoodStyles.Hot}>
          <h1> Danie dnia </h1>
          <h3>{today}</h3>
          <CardMedia
            className={HotfoodStyles.imgStyle}
            image={'assets/' + this.props.recipes.img}
            title="lasagneBolognese"
          />
          <h1>{this.props.recipes.tytul}</h1>


        </div>
      </div>
    );
  }
}
