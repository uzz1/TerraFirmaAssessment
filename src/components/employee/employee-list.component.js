import React, { Component } from "react";
import axios from 'axios';
//import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './employeeTableRow';
import { Table, Thead, Tbody, Th, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './employee.css'
import BASE_URL from '../../config' 

export default class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
  
    if (this.state.employees.length === 0) {
    axios.get(`${BASE_URL}/employees`)
      .then(res => {
        this.setState({
          employees: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  DataTable() {
    return this.state.employees.map((res, i) => {
      return <EmployeeTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover className="table">
        <Thead>
          <Tr>
            <Th className="table-header">Name</Th>
            <Th className="table-header">Surname</Th>
            <Th className="table-header">Email</Th>
            <Th className="table-header">ID</Th>
            <Th className="table-header">Age</Th>
            <Th className="table-header">Nationality</Th>
            <Th className="table-header">Address</Th>
            <Th className="table-header">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {this.DataTable()}
        </Tbody>
      </Table>
    </div>);
  }
}