import React, { Component } from "react";
import HotfoodStyles from "./Hotfood.module.css";
import CardMedia from "@material-ui/core/CardMedia";
import lazania from "../../static/recipes/lazania.png";

export default class Hotfood extends Component {
  constructor(props) {
    super(props);

    this.state = { danie_dnia: [] };
  }
  componentDidMount() {
    this.setState({ danie_dnia: this.props.recipes });
  }

  render() {
    const date = new Date();
    const dayMonth = date.getDate();
    const day = date.getDay();
    const year = date.getFullYear();
    const month = date.getMonth();

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
          <h3>{dzien(day)}</h3>
          <h3>{dayMonth + "." + month + "." + year}</h3>
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
