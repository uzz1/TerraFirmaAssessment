import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../../redux/reducers/authSlice'
import Spinner from '../common/spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

  const navigate = useHistory()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate.push('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
      <Form.Label><strong>Username</strong></Form.Label>
      <Form.Control id='username' name='username' type="text" value={username} placeholder='Enter a username' onChange={onChange} />
    </Form.Group>

    <Form.Group controlId="Email">
      <Form.Label><strong>Email</strong></Form.Label>
      <Form.Control id='email' name='email' type="email" value={email} placeholder='yourmail@mail.com' onChange={onChange} />
    </Form.Group>

    <Form.Group controlId="Password">
      <Form.Label><strong>Password</strong></Form.Label>
      <Form.Control id='password' name='password' type="password" value={password} placeholder='Enter a password' onChange={onChange} />
    </Form.Group>

    <Form.Group controlId="Password">
      <Form.Label><strong>Confirm Password</strong></Form.Label>
      <Form.Control id='password2' name='password2' type="password" value={password2} placeholder='Confirm password' onChange={onChange} />
    </Form.Group>
    <div className="d-grid">
    <br></br>

        <Button variant="primary" size="md" type="submit" className="btn btn-primary" >
          <strong>Submit</strong>
        </Button>
      </div>
    <p className="forgot-password text-right">
        <br></br>
      Already registered? <a href="/login"><strong> Sign in</strong></a>
    </p>
        </Form>
      </section>
    </>
  )
}

export default Register
