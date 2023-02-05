import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CreateEmployeeComponent  from '../employee/create-employee.component'

function CreateEmployee() {
    const navigate = useHistory()

  const { user } = useSelector((state) => state.auth)
  
  useEffect(() => {

    if (!user) {
      navigate.push('/firstlogin')
    }

   
  }, [user, navigate])
  
  return (
    <CreateEmployeeComponent />
  )
}

export default CreateEmployee