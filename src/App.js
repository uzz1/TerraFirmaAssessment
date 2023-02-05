import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Container from 'react-bootstrap/Container'
import { ToastContainer } from 'react-toastify'
import Header from './components/common/header'


import CreateEmployee from './components/employee/create-employee.component'
import EditEmployee from './components/employee/edit-employee.component'
import EmployeeList from './components/employee/employee-list.component'
import Login from './components/user/login'
import Register from './components/user/register'
import Dashboard from './components/user/dashboard'
import FirstLogin from './components/user/firstLogin'
import { useSelector } from 'react-redux'

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="App">
      <Router>
       <Header />

        <Container className="flex-container">
         
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Dashboard {...props} />}
                  />
                  {user?(
                    <>
                  <Route
                    exact
                    path="/create-employee"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-employee/:id"
                    component={(props) => <EditEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employee-list"
                    component={(props) => <EmployeeList {...props} />}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Dashboard {...props} />}
                  />
                  </>
                  ):(
                    <>
                  <Route
                    
                    path="/create-employee"
                    component={(props) => <FirstLogin {...props} />}
                  />
                  <Route
                    
                    path="/edit-employee/:id"
                    component={(props) => <FirstLogin {...props} />}
                  />
                  <Route
                    
                    path="/employee-list"
                    component={(props) => <FirstLogin {...props} />}
                  />
                   <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  </>
                  )}
                  
                   <Route
                    exact
                    path="/register"
                    component={(props) => <Register {...props} />}
                  />
                   <Route
                    exact
                    path="/dashboard"
                    component={(props) => <Dashboard {...props} />}
                  />
                   <Route
                    exact
                    path="/firstlogin"
                    component={(props) => <FirstLogin {...props} />}
                  />
                </Switch>
              </div>
           
        </Container>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
