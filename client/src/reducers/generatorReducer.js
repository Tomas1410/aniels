import { GENERATE_FETCH_FAILED, GENERATE_FETCH_SUCCESS } from "../actions/types";

const initialState = {
    przepisy: [],
    msg: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GENERATE_FETCH_SUCCESS:
            return {
                ...state,
                przepisy: action.payload,
                msg: ''
            };
        case GENERATE_FETCH_FAILED:
            return {
                ...state,
                przepisy: [],
                msg: action.msg
            };
        default:
            return state;
    }
}