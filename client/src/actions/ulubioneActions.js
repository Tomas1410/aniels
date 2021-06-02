import { FETCH_ULUBIONE_SUCCESS, FETCH_ULUBIONE_FAILED, FETCHING_ULUBIONE } from './types'
import axios from "axios";
import { tokenConfig } from './authAction'

export const fetchUlubione = (username) => (dispatch, getState) => {
    const body = JSON.stringify({ ulubione: username })
    console.log('fetchUlubione body:', body)
    dispatch({ type: FETCHING_ULUBIONE, msg: "Fetching begin" })

    axios.post('/ulubione', body, tokenConfig(getState))
        .then(res => dispatch({
            type: FETCH_ULUBIONE_SUCCESS,
            payload: res.data,
            msg: "Fetching successfull"
        }))
        .catch(err => {
            dispatch({
                type: FETCH_ULUBIONE_FAILED,
                msg: "Error while favourite click:" + err
            })
        })
};