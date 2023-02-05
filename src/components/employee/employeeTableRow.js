import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import {  Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './employee.css'
import BASE_URL from '../../config' 

export default class EmployeeTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteEmployee = this.deleteEmployee.bind(this)
  }

  deleteEmployee() {
    axios
      .delete(
        `${BASE_URL}/employees/delete-employee/` + this.props.obj._id,
      )
      .then((res) => {
        console.log('Employee successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Tr>
        <Td className="table-data">{this.props.obj.name}</Td>
        <Td className="table-data">{this.props.obj.surname}</Td>
        <Td className="table-data">{this.props.obj.email}</Td>
        <Td className="table-data">{this.props.obj.idn}</Td>
        <Td className="table-data">{this.props.obj.age}</Td>
        <Td className="table-data">{this.props.obj.nationality}</Td>
        <Td className="table-data">{this.props.obj.address}</Td>

        <Td>
          <Link
            className="edit-button" path={"/edit-employee/"}
            to={'/edit-employee/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button className="delete-button" onClick={this.deleteEmployee} size="sm" variant="danger">
            Delete
          </Button>
        </Td>
      </Tr>
    )
  }
}
