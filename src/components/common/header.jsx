import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/reducers/authSlice'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import './common.css'
//import { ReactComponent as Logo } from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const navigate = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate.push('/')
  }

  return (
    <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        <Link to={'/'} className="nav-link">
            Terra Firma Assessment
          </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Container className='navlinks-container'>
        <Nav className="mr-auto">
        <Link to={'/create-employee'} className="nav-link">
              Create Employee
            </Link>
            <Link to={'/employee-list'} className="nav-link">
                Employee List
            </Link>
          <NavDropdown title="User Area" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Divider />
          {user ? (
            <NavDropdown.Item>
 <Button onClick={onLogout}>
               <FaSignOutAlt />
               <Link to={'/'} className="nav-link">
              Logout
            </Link>
                 </Button>
            </NavDropdown.Item>
              
         
        ) : (
          <>
          <Container className="nav-button-container">
          <NavDropdown.Item>
          <Button>
            <FaSignInAlt />
              <Link to={'/login'} className="nav-link">
              Login
            </Link>
              </Button>
              </NavDropdown.Item>

          </Container>
           
          <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            <Button>
            <FaUser />
              <Link to={'/register'} className="nav-link">
              Register
            </Link>
              </Button>
            </NavDropdown.Item>
          </>
        )}

           
          </NavDropdown>
        </Nav>
        </Container>
      </Navbar.Collapse>
      </Container>
    </Navbar>

 
  </header>
  )
}

export default Header