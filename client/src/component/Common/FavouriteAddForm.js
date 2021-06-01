import React, { useState } from 'react'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../../actions/recipesActions'



export default function FavouriteAddForm(props) {

    const dispatch = useDispatch();
    const [isClicked, setClicked] = useState(false)



    const handleFavouriteAdd = () => {

        setClicked(prevValue => !prevValue)
        console.log('przepis id:', props.przepisId, '\n username:', props.username)
        dispatch(addFavourite(props.przepisId, props.username))
    }

    return (
        <button onClick={handleFavouriteAdd}>
            {isClicked === true ? (<FavoriteIcon></FavoriteIcon>) : (<FavoriteBorder></FavoriteBorder>)}
        </button>
    )
}



