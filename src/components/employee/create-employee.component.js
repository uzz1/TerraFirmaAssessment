import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './employee.css'
import BASE_URL from '../../config' 

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeSurname = this.onChangeEmployeeSurname.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeIdn = this.onChangeEmployeeIdn.bind(this);
    this.onChangeEmployeeAge = this.onChangeEmployeeAge.bind(this);
    this.onChangeEmployeeNationality= this.onChangeEmployeeNationality.bind(this);
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      surname: '',
      email: '',
      idn: '',
      age: '',
      nationality: '',
      address: '',
    }
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeEmployeeSurname(e) {
    this.setState({ surname: e.target.value })
  }
  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeEmployeeIdn(e) {
    this.setState({ idn: e.target.value })
  }
  onChangeEmployeeAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeEmployeeNationality(e) {
    this.setState({ nationality: e.target.value })
  }
  onChangeEmployeeAddress(e) {
    this.setState({ address: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      idn: this.state.idn,
      age: this.state.age,
      nationality: this.state.nationality,
      address: this.state.address
    };
    axios.post(`${BASE_URL}/employees/create-employee`, employeeObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      surname: '',
      email: '',
      idn: '',
      age: '',
      nationality: '',
      address: '',
    })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} />
        </Form.Group>

        <Form.Group controlId="Surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" value={this.state.surname} onChange={this.onChangeEmployeeSurname} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Idn">
          <Form.Label>ID Number</Form.Label>
          <Form.Control type="text" value={this.state.idn} onChange={this.onChangeEmployeeIdn} />
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" value={this.state.age} onChange={this.onChangeEmployeeAge} />
        </Form.Group>

        <Form.Group controlId="Nationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" value={this.state.nationality} onChange={this.onChangeEmployeeNationality} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeEmployeeAddress} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Employee
        </Button>
      </Form>
    </div>);
  }
}