import {
    GENERATE_FETCH_FAILED, GENERATE_FETCH_SUCCESS
} from "./types";
import axios from "axios";

export const generateRecipe = ({ pora, typ, czas }) => dispatch => {
    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //request body
    const body = JSON.stringify({ pora, typ, czas })

    axios.post('/generator', body, config)
        .then(res => dispatch({
            type: GENERATE_FETCH_SUCCESS,
            payload: res.data
        }))
        .catch(err => {

            dispatch({
                type: GENERATE_FETCH_FAILED,
                msg: err.response.data
            })
        })

};