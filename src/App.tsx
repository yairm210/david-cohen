import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Create a QR code</Card.Title>
        <Card.Text>
          Use the QR code to start the session.
           After the session you will automatically receive the file using SMS, Whatsapp or email.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
