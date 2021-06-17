import React from "react";
import { Card } from 'react-bootstrap';

export default function BootstrapFooter() {
  return (
    <Card style={{ 'marginTop': "2rem" }}>
      <Card.Header>Anielska kuchnia</Card.Header>
      <Card.Footer className="text-muted">Życzymy smacznego</Card.Footer>
    </Card>
  );
}
