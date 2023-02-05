import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './employee.css'
import BASE_URL from '../../config' 


export default class EditEmployee extends Component {

  constructor(props) {
    super(props)

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeSurname = this.onChangeEmployeeSurname.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeIdn = this.onChangeEmployeeIdn.bind(this);
    this.onChangeEmployeeAge = this.onChangeEmployeeAge.bind(this);
    this.onChangeEmployeeNationality= this.onChangeEmployeeNationality.bind(this);
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this);
  

    this.onSubmit = this.onSubmit.bind(this);

    // State
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

  componentDidMount() {
    axios.get(`${BASE_URL}/employees/edit-employee/` + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          surname: res.data.surname,
          email: res.data.email,
          idn: res.data.idn,
          age: res.data.age,
          nationality: res.data.nationality,
          address: res.data.address
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/employees/update-employee/' + this.props.match.params.id, employeeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Employee successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Employee List 
    this.props.history.push('/employee-list')
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Employee
        </Button>
      </Form>
    </div>);
  }
}