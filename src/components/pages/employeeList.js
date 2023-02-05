import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
//import Table from 'react-bootstrap/Table';
import EmployeeTableRow from '../employee/employeeTableRow';
import { Table, Thead, Tbody, Th, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../employee/employee.css'

function EmployeeList() {
const [employees, setEmployees] = useState([])

    
const DataTable = () => {
    return employees.map((res, i) => {
      return <EmployeeTableRow obj={res} key={i} />;
    })
  }


    
        useEffect(() => {
            axios.get('http://localhost:4000/employees/')
            .then(res => {
              setEmployees(
                res.data.data
              );
            })
            .catch((error) => {
              console.log(error);
            }
        )},[employees])


  return (
    <div className="table-wrapper">
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
          {DataTable}
        </Tbody>
      </Table>
    </div>
  )
}

export default EmployeeList