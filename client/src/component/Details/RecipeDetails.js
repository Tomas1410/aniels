import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useRouteMatch
} from "react-router-dom";
import Details from './Details'
import Main from '../Main/Main'
import NotFound from '../Common/NotFound';


export default function RecipeDetails() {
    let { path, url } = useRouteMatch();
    let history = useHistory();
    return (
        <Switch>
            <Route exact path={path} component={NotFound} />
            <Route path={`${path}/:przepisId`}>
                <Details />
            </Route>


        </Switch>
    )
}
