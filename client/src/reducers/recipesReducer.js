import { FETCH_RECIPES, FETCH_RECIPE, PUSH_RECIPE_SUCCESS, PUSH_RECIPE_FAILED, PUSH_COMMENT_SUCCES, PUSH_COMMENT_FAILED, FAVOURITE_CLICKED_SUCCESS, FAVOURITE_CLICKED_FAILED, FAVOURITE_UNCLICKED_FAILED, FAVOURITE_UNCLICKED_SUCCESS } from '../actions/types'
import { } from '../actions/types'


const initialState = {
    przepisy: [],
    przepis: {},
    dodanyKomentarz: {},
    favouriteClicked: false,
    msg: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                przepisy: action.payload
            }
        case FETCH_RECIPE:
            return {
                ...state,
                przepis: action.payload
            }
        case PUSH_RECIPE_SUCCESS:
            return {
                ...state,
                przepis: action.payload,
                msg: action.msg
            }
        case PUSH_RECIPE_FAILED:
            return {
                ...state,
                msg: action.msg
            };
        case PUSH_COMMENT_SUCCES:
            return {
                ...state,
                dodanyKomentarz: action.payload

            }
        case PUSH_COMMENT_FAILED:
            return {
                ...state,
                msg: action.msg
            }
        case FAVOURITE_CLICKED_SUCCESS:
            return {
                ...state,
                favouriteClicked: action.isClicked,
                msg: action.msg
            }
        case FAVOURITE_CLICKED_FAILED:
            return {
                ...state,
                msg: action.msg
            }
        case FAVOURITE_UNCLICKED_SUCCESS:
            return {
                ...state,
                favouriteClicked: action.isClicked,
                msg: action.msg
            }
        case FAVOURITE_UNCLICKED_FAILED:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return {
                ...state
            }
    }
}