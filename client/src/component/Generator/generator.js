import React, { Component } from 'react'
import './generator.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Generator extends Component {
    render() {
 




        return (
    


<Form.Group>
<h2>Generator jadłospisu</h2>
<h4>Pora</h4>
  <Form.Control as="select" size="lg">
  
    <option>Dowolne</option>
    <option>Śniadanie</option>
    <option>Obiad</option>
    <option>Kolacja</option>
  </Form.Control>
  <br />
  <h4>Typ</h4>
  <Form.Control as="select">
    <option>Dowolne</option>
    <option>Mleczne</option>
    <option>Na ostro</option>
    <option>Wegetariańskie</option>
    <option>Mięsne</option>
    <option>Fast-food</option>

  </Form.Control>
  <br />
   <h4>Czas</h4>
  <Form.Control size="sm" as="select">
 
    <option>Dowolne</option>
    <option>10 min</option>
    <option>30 min</option>
    <option>60 min</option>
  </Form.Control>
  <br />
  <h4>Składniki</h4>
  <Form.Control size="sm" as="select">
 
    <option>Dowolne</option>
    <option>Papryka</option>
    <option>Jajka</option>
    <option>Pomidory</option>
    <option>cebula</option>
    <option>Ziemniaki</option>
    <option>pieprz</option>

  </Form.Control>
  <br />
  <h4>Słowa kluczowe(nie wymagane)</h4>
  <Form.Control as="textarea" rows={2} />
  <br/>
  <Form.Label>Złożoność posiłku</Form.Label>
    <Form.Control type="range" />
    <Form.Check label="Dania profesjonalistów" />
    <br/>
  <Button variant="warning">Generuj jadłospis</Button>
</Form.Group>
        
   
            
        )
        }
      }