import React from 'react'
import DetailsStyles from './Details.module.css';
export default function Table(props) {
    const ingredientText = (item) => {
        const newText = item.split('\n').map(str => <tr>{str}</tr>);
        return newText;
    }
    return (
        <table className={DetailsStyles.ingredients} >
            <tr>
                <h1>Skladniki</h1>
            </tr>
            {props.skladniki ? ingredientText(props.skladniki) : ('')}
        </table>

    )
}
