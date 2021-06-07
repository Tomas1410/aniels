import React from "react";
import { Card } from 'react-bootstrap';

export default function BootstrapFooter() {
  return (
    <Card style={{ 'marginTop': "2rem" }}>
      <Card.Header>Anielska kuchnia</Card.Header>
      <Card.Body>
        <Card.Title>Projekt realizowany we wspólpracy z najlepszymi specjalistami oraz z należytą starannością</Card.Title>
        <Card.Text>
          Tomasz Uryga Damian Wasiak Patryk Wołożonek
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-muted">Życzymy smacznego</Card.Footer>
    </Card>
  );
}
