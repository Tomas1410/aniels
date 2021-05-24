import React from 'react'
import RankingStyles from './Ranking.module.css'

let malejaceOceny = true;
let malejaceKomentarze = true;


function sortTableByRatings(){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  malejaceOceny =! malejaceOceny;
  switching = true;
  while (switching)
  {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName(RankingStyles.ratingValue)[0];
      y = rows[i + 1].getElementsByClassName(RankingStyles.ratingValue)[0];
      //check if the two rows should switch place:
      if (malejaceOceny) {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      } else {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
    
  }
  
}
function sortTableByComments(){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  malejaceKomentarze =! malejaceKomentarze;
  switching = true;
  while (switching)
  {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName(RankingStyles.commentsQuantityValue)[0];
      y = rows[i + 1].getElementsByClassName(RankingStyles.commentsQuantityValue)[0];
      //check if the two rows should switch place:
      if (malejaceKomentarze) {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      } else {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
    
  }
  
}

export default function Ranking() {
  
  
    return (
        <div className={RankingStyles.containerStyle}>
           <h1 className={RankingStyles.h1}>Ranking przepisów</h1>
            <button className={RankingStyles.buttonClass} onClick={sortTableByRatings}>Najwyżej oceniane</button>
            <button className={RankingStyles.buttonClass} onClick={sortTableByComments}>Najczęściej komentowane</button>
         
            <table className={RankingStyles.table} id="mytable">
            <tr>
              <th>Nazwa dania</th>
              <th>Ocena</th>
              <th>Ilość komentarzy</th>
            </tr>
            <tr>
              <td>Spaghetti Bolognese</td>
              <td className={RankingStyles.ratingValue}>5</td>
              <td className={RankingStyles.commentsQuantityValue}>51</td>
            </tr>
            <tr>
              <td>Lasagne bolognese</td>
              <td className={RankingStyles.ratingValue}>5</td>
              <td className={RankingStyles.commentsQuantityValue}>33</td>
            </tr>
            <tr>
              <td>Pieczony kurczak z ziemniakami</td>
              <td className={RankingStyles.ratingValue}>4</td>
              <td className={RankingStyles.commentsQuantityValue}>11</td>
            </tr>
            <tr>
              <td>Zrazy kasztelańskie</td>
              <td className={RankingStyles.ratingValue}>4.5</td>
              <td className={RankingStyles.commentsQuantityValue}>12</td>
            </tr>
            <tr>
              <td>Szybka zalewajka</td>
              <td className={RankingStyles.ratingValue}>3.5</td>
              <td className={RankingStyles.commentsQuantityValue}>14</td>
            </tr>
            <tr>
              <td>Parówki w cieście francuskim z warzywami</td>
              <td className={RankingStyles.ratingValue}>2.5</td>
              <td className={RankingStyles.commentsQuantityValue}>18</td>
            </tr>
            </table>
            </div>
    )
}
