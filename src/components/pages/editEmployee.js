import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditEmployeeComponent  from '../employee/edit-employee.component'

function EditEmployee() {
    const navigate = useHistory()

    const { user } = useSelector((state) => state.auth)
    
    useEffect(() => {
  
      if (!user) {
        navigate.push('/login')
      }
  
     
    }, [user, navigate])
  return (
   <EditEmployeeComponent />
  )
}

export default EditEmployee