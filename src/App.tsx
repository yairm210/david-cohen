import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Create a QR code</Card.Title>
        <Card.Text>
          Use the QR code to start the session.
           After the session you will automatically receive the file using SMS, Whatsapp or email.
        </Card.Text>
        <div className="container-input email">
          <label>Email</label> 
          <input type='email' name='email'/>
        </div>
        <div className="container-input">
          <label>Phone number</label> 
          <input type='number' name='phone'/>
        </div>
        <Button variant="primary">Generate</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
