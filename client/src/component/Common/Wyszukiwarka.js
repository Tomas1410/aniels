import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import CardComponent from './CardComponent';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Wyszukiwarka() {
    return (
        <div>
            <Form className="py-4" >
                <Form.Group className="py-2">
                    <Form.Label className="m-auto pb-2"> Wprowadź słowa kluczowe swojego przepisu</Form.Label>
                    <Form.Control className="" type="search"></Form.Control>
                </Form.Group>
                <Form.Row>

                    <Form.Group as={Col} controlId="wegetarianski">
                        <Form.Check type="checkbox" label="wegetarianskie" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="weganski">
                        <Form.Check type="checkbox" label="wegańskie" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="miesny">
                        <Form.Check type="checkbox" label="miesne" />
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="bezGlutenu">
                        <Form.Check type="checkbox" label="bez glutenu" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="niskiIndeksGlikemiczny">
                        <Form.Check type="checkbox" label="niski indeks glikemiczny" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dietetyczne">
                        <Form.Check type="checkbox" label="dietetyczne" />
                    </Form.Group>
                </Form.Row>
                <Button variant="success" type="submit">Szukaj</Button>
            </Form>
            <Grid container spacing={3} padding={2}>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                    <CardComponent />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                    <CardComponent />
                </Grid>
            </Grid>
        </div>
    )
}
