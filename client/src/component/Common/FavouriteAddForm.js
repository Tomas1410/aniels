import React from 'react'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { connect } from 'react-redux';
import { addFavourite } from '../../actions/recipesActions';
function FavouriteAddForm(props) {
    const handleFavouriteAdd = (e) => {
        e.preventDefault()
        console.log('Dodano do ulubionych')
        addFavourite(props.przepisId, props.username)
    }

    return (
        <from >
            <button type="submit" onClick={handleFavouriteAdd}>
                <FavoriteBorder></FavoriteBorder>
            </button>
        </from>
    )
}
export default connect(null, { addFavourite })(FavouriteAddForm);
