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

        <Form.Label>Złożoność posiłku</Form.Label>

        <br />
        <Button variant="warning">Generuj jadłospis</Button>
      </Form.Group>



    )
  }
}