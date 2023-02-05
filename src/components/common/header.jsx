import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/reducers/authSlice'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import './common.css'

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
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className="nav-link">
            Terra Firma Assessment
          </Link>
        </Navbar.Brand>
<Container className='navlinks-container'>
        <Nav className="justify-content-end">
          <Nav>
            <Link to={'/create-employee'} className="nav-link">
              Create Employee
            </Link>
          </Nav>

          <Nav>
            <Link to={'/employee-list'} className="nav-link">
                Employee List
            </Link>
            <Nav>
            {user ? (
               <Button onClick={onLogout}>
               <FaSignOutAlt />
               <Link to={'/'} className="nav-link">
              Logout
            </Link>
                 </Button>
         
        ) : (
          <>
            <Button>
            <FaSignInAlt />
              <Link to={'/login'} className="nav-link">
              Login
            </Link>
              </Button>
           
          </>
        )}
             
           
          </Nav>
          </Nav>
        </Nav>
        </Container>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header