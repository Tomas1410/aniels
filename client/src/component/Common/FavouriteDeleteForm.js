import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { deleteFavourite } from '../../actions/recipesActions';
function FavouriteDeleteForm(props) {
    const handleFavouriteDelete = (e) => {
        e.preventDefault()
        console.log('usunieto z ulubionych')
        deleteFavourite(props.przepisId, props.username)

    }
    return (
        <from>
            <button type="submit" onClick={handleFavouriteDelete}>
                <FavoriteIcon></FavoriteIcon>
            </button>
        </from>
    )
}
export default connect(null, { deleteFavourite })(FavouriteDeleteForm);