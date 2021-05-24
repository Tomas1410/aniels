import React from 'react'
import './Navbar.css';
import Main from '../Main/Main'
import Details from '../Details/Details'
import Recipes from '../Recipes/Recipes'
import Login from '../Login/Login'
import Logout from '../Login/Logout'
import Ranking from '../Rank/Ranking'
import Konto from '../Userprofile/Konto'
import Ulubiony from '../Favourite/Ulubiony'
import Rejestracja from '../Register/Rejestracja'
import Wyszukiwarka from './Wyszukiwarka'
import Generator from '../Generator/generator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import RecipesAdd from '../Recipes/RecipesAdd';



function Navigacja({ auth }) {
  const { isAuthenticated, user } = auth

  const authLinks = (
    <Nav className="ml-sm-1">
      <Nav.Link href="/konto" >{user ? (<b>cześć {user.name}</b>) : ''}</Nav.Link>
      <Logout />

    </Nav>
  )
  const guestLinks = (
    <Nav className="ml-sm-1">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/rejestracja">Rejestracja</Nav.Link>
    </Nav>
  )

  return (
    <Router>
      <div >

        <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />
            <Link to="/" clasname="logo">Anielska kuchnia</Link>
          </Navbar.Brand>
          <Form inline action="wyszukiwarka" className="linki2">
            <FormControl type="text" placeholder="Szukaj przepisów..." className="mr-sm-2" />
            <Button variant="outline-success" type="submit" className="linki3">Szukaj</Button>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="collapse" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/przepisy">Przepisy</Nav.Link>
              <Nav.Link href="/ranking">Ranking</Nav.Link>
              {/* <Nav.Link href="konto">Konto</Nav.Link> */}
              {isAuthenticated ? <Nav.Link href="Ulubiony"> Ulubiony</Nav.Link> : ''}

              <Nav.Link href="/generator">Generator</Nav.Link>
              <Nav.Link href="/dodaj-przepis">Dodaj przepis</Nav.Link>
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}


          </Navbar.Collapse>

        </Navbar>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/details/:przepisId">
            <Details />
          </Route>
          <Route exact path="/przepisy">
            <Recipes />
          </Route>
          <Route path="/generator">
            <Generator />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/dodaj-przepis">
            <RecipesAdd />
          </Route>
          <Route path="/Rejestracja">
            <Rejestracja />
          </Route>
          <Route path="/Ranking">
            <Ranking />
          </Route>
          <Route path="/Konto">
            <Konto />
          </Route>
          <Route path="/Ulubiony">
            <Ulubiony />
          </Route>
          <Route path="/wyszukiwarka">
            <Wyszukiwarka />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}



const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(Navigacja)