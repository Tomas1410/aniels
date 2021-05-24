import React from "react";
import { Card } from 'react-bootstrap';

export default function BootstrapFooter() {
  return (
    <Card style={{ 'marginTop': "2rem" }}>
      <Card.Header>Anielska kuchnia</Card.Header>
      <Card.Body>
        <Card.Title>Sprawdz nasz projekt i wzmocnij naszą aplikację</Card.Title>
        <Card.Text>
          Kod źródłowy oraz historia powstawania tego projektu dostepna jest w publicznym repozytorium na githubie
        </Card.Text>
        <a href="https://github.com/JanuszProgramowaniaa/Anielska_Kuchnia">Sprawdz</a>
      </Card.Body>
      <Card.Footer className="text-muted">Essa</Card.Footer>
    </Card>
  );
}
