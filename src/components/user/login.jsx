import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../redux/reducers/authSlice'
import Spinner from '../common/spinner'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useHistory()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (user) {
      navigate.push('/dashboard')
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

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to add employees</p>
      </section>

      <section className='form'>
        <Form onSubmit={onSubmit}>
     

     <Form.Group controlId="Email">
       <Form.Label><strong>Email</strong></Form.Label>
       <Form.Control id='email' name='email' type="email" placeholder='yourmail@mail.com' value={email} onChange={onChange} />
     </Form.Group>



     <Form.Group controlId="Password">
       <Form.Label><strong>Password</strong></Form.Label>
       <Form.Control id='password' name='password' type="password" placeholder='Your password' value={password} onChange={onChange} />
     </Form.Group>
     <div className="d-grid">

            <br></br>
          <Button variant="primary" size="md" type="submit" className="btn btn-primary" >
            <strong>Submit</strong>
          </Button>
          </div>
          <br></br>
        <p className="forgot-password text-right">
          Not a member? <a href="/register"><strong> Register</strong></a>
        </p>
        </Form>
      </section>
    </>
  )
}

export default Login
