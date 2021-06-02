import { FETCH_ULUBIONE_SUCCESS, FETCH_ULUBIONE_FAILED, FETCHING_ULUBIONE } from '../actions/types'
import { } from '../actions/types'


const initialState = {
    przepisy: [],
    msg: '',
    isFetching: false
}
export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_ULUBIONE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                przepisy: action.payload,
                msg: action.msg
            }
        case FETCH_ULUBIONE_FAILED:
            return {
                ...state,
                msg: action.msg
            }
        case FETCHING_ULUBIONE:
            return {
                ...state,
                isFetching: true,
                msg: action.msg

            }
        default:
            return {
                ...state
            }
    }
}