import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
        backgroundColor: '#222',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)',
        color: 'white',
        maxWidth: '600px',
        width: '100%'
      }}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" placeholder="Username" required />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check required label="Agree to terms and conditions" />
        </Form.Group>
        <Button type="submit" style={{
          backgroundColor: '#ff5722',
          border: 'none',
          padding: '10px 20px',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '5px',
          transition: '0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#ff7043'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff5722'}>
          Submit Form
        </Button>
      </Form>
    </div>
  );
}

export default FormExample;
