import React, { useState, useEffect } from 'react'
import './generator.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { generateRecipe } from '../../actions/generatorAction'
import { connect } from 'react-redux'
import CardComponent from '../Common/CardComponent'
import Grid from '@material-ui/core/Grid';

function Generator({ generateRecipe, przepisy }) {

  const [pora, setPora] = useState('');
  const [typ, setTyp] = useState('');
  const [czas, setCzas] = useState('');

  const handleChangePora = (e) => setPora(e.target.value);
  const handleChangeTyp = (e) => setTyp(e.target.value);
  const handleChangeCzas = (e) => setCzas(e.target.value);



  const handleSubmit = (e) => {
    e.preventDefault()
    const generat = {
      pora,
      typ,
      czas
    }
    generateRecipe(generat)

  }
  useEffect(() => {

  }, [przepisy])

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <h2>Generator jadłospisu</h2>
          <h4>Pora</h4>
          <Form.Control as="select" size="lg" name="pora" onChange={handleChangePora}>

            <option>Dowolne</option>
            <option>Śniadanie</option>
            <option>Obiad</option>
            <option>Kolacja</option>
          </Form.Control>
          <br />
          <h4>Typ</h4>
          <Form.Control as="select" name="typ" onChange={handleChangeTyp}>
            <option>Dowolne</option>
            <option>Mleczne</option>
            <option>Na ostro</option>
            <option>Wegetariańskie</option>
            <option>Mięsne</option>
            <option>Fast-food</option>

          </Form.Control>
          <br />
          <h4>Czas</h4>
          <Form.Control size="sm" as="select" name="czas" onChange={handleChangeCzas}>
            <option>Dowolne</option>
            <option>10 min</option>
            <option>30 min</option>
            <option>60 min</option>
          </Form.Control>

          <br />

          <br />
          <Button variant="warning" type="submit">Generuj jadłospis</Button>
        </Form.Group>
      </form>
      <Grid container spacing={2}>
        {przepisy ? (przepisy.map(przepis =>
          <Grid key={przepis._id} item xl={3} lg={3} md={3} sm={4} xs={12}>
            <CardComponent przepis={przepis} />
          </Grid>
        )) : ('')}
      </Grid>
    </React.Fragment>
  )
}
const mapToStateProps = state => ({
  przepisy: state.generator.przepisy
})

export default connect(mapToStateProps, { generateRecipe })(Generator);
