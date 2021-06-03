import React, { useEffect } from 'react'
import RankingStyles from './Ranking.module.css'
import Loader from '../Main/Loader'
import { fetchRecipes } from '../../actions/recipesActions'
import { connect } from 'react-redux'
let malejaceOceny = true;
let malejaceKomentarze = true;


function sortTableByRatings() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  malejaceOceny = !malejaceOceny;
  switching = true;
  while (switching) {
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
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      } else {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
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
function sortTableByComments() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  malejaceKomentarze = !malejaceKomentarze;
  switching = true;
  while (switching) {
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
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        } else {
          shouldSwitch = false;
        }
      } else {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
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

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
  v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));


document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  const table = th.closest('table');
  Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    .forEach(tr => table.appendChild(tr));
})));

function Ranking({ fetchRecipes, przepisy }) {


  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div className={RankingStyles.containerStyle}>
      <h1 className={RankingStyles.h1}>Ranking przepisów</h1>
      <button className={RankingStyles.buttonClass} onClick={sortTableByRatings}>Najbardziej ulubione</button>
      <button className={RankingStyles.buttonClass} onClick={sortTableByComments}>Najczęściej komentowane</button>

      <table className={RankingStyles.table} id="mytable">
        <tr>
          <th>Nazwa dania</th>
          <th>Najbardziej ulubione</th>
          <th>Ilość komentarzy</th>
        </tr>
        {przepisy ? (przepisy.map(przepis =>
          <tr>
            <td>{przepis.tytul}</td>
            <td className={RankingStyles.ratingValue}>{Object.keys(przepis.ulubione).length}</td>
            <td className={RankingStyles.commentsQuantityValue}>{Object.keys(przepis.komentarze).length}</td>
          </tr>)) : (<Loader />)}

      </table>
    </div >
  )
}
const mapStateToProps = state => {
  return {
    przepisy: state.main.przepisy
  }
}

export default connect(mapStateToProps, { fetchRecipes })(Ranking);
