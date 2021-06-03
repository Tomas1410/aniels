import { FETCH_RECIPES, FETCH_RECIPE, PUSH_RECIPE_FAILED, PUSH_RECIPE_SUCCESS, PUSH_COMMENT_SUCCES, PUSH_COMMENT_FAILED, FAVOURITE_CLICKED_FAILED, FAVOURITE_UNCLICKED_SUCCESS, FAVOURITE_UNCLICKED_FAILED, FAVOURITE_CLICKED_SUCCESS } from "./types";
import { returnErrors } from "./errorAction";
import axios from "axios";
import { tokenConfig } from './authAction'




export const fetchRecipes = () => (dispatch) => {
  fetch("/recipes")
    .then((response) => response.json())
    .then((przepisy) =>
      dispatch({
        type: FETCH_RECIPES,
        payload: przepisy,
      })
    );
};

export const fetchRecipe = (id) => (dispatch) => {
  fetch("/details/" + id)
    .then((response) => response.json())
    .then((przepis) =>
      dispatch({
        type: FETCH_RECIPE,
        payload: przepis,
      })
    );
};


export const pushRecipe = (recipe) => (dispatch, getState) => {

  //request body

  // const body = JSON.stringify(Object.fromEntries(recipe));

  axios.post('/recipes/add', recipe, tokenConfig(getState))
    .then(res => dispatch({
      type: PUSH_RECIPE_SUCCESS,
      payload: res.data,
      msg: "Added"
    }))
    .catch(err => {
      dispatch(returnErrors(err.data, err.status, 'PUSH_RECIPE_FAILED'));
      dispatch({
        type: PUSH_RECIPE_FAILED,
        msg: "Couldn't add recipe"
      })
    })
};

export const pushComment = (komentarz, przepisId) => (dispatch, getState) => {

  const body = JSON.stringify(komentarz)

  axios.patch('/details/' + przepisId + '/add-comment', body, tokenConfig(getState))
    .then(res => dispatch({
      type: PUSH_COMMENT_SUCCES,
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: PUSH_COMMENT_FAILED,
        msg: 'Cannot push comments, error: ' + err
      })
    })
};
export const addFavourite = (przepisId, username) => (dispatch, getState) => {

  const body = { name: username }

  axios.patch('/ulubione/dodaj-ulubiony/' + przepisId, body, tokenConfig(getState))
    .then(res => dispatch({
      type: FAVOURITE_CLICKED_SUCCESS,
      isClicked: true,
      msg: res.data
    }))
    .catch(err => {
      dispatch({
        type: FAVOURITE_CLICKED_FAILED,
        msg: "Error while favourite click:" + err
      })
    })

}
export const deleteFavourite = (przepisId, username) => (dispatch, getState) => {

  const body = JSON.stringify({ name: username })

  axios.patch('/ulubione/usun-ulubiony/' + przepisId, body, tokenConfig(getState))
    .then(res => dispatch({
      type: FAVOURITE_UNCLICKED_SUCCESS,
      isClicked: false,
      msg: res.data
    }))
    .catch(err => {
      dispatch({
        type: FAVOURITE_UNCLICKED_FAILED,
        msg: "Error while favourite unclick:" + err
      })
    })

}


