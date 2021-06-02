import React, { useState } from 'react'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { deleteFavourite } from '../../actions/recipesActions';

export default function FavouriteDeleteForm(props) {

    const dispatch = useDispatch();
    const [Clickeded, setClicked] = useState(false)

    const handleFavouriteDelete = () => {

        setClicked(prevValue => !prevValue)
        console.log('przepis id:', props.przepisId, '\n username:', props.username)
        dispatch(deleteFavourite(props.przepisId, props.username))

    }
    return (
        <button onClick={handleFavouriteDelete}>
            {Clickeded === true ? (<FavoriteBorder></FavoriteBorder>) : (<FavoriteIcon></FavoriteIcon>)}
        </button>
    )
}

