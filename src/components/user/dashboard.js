import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Dashboard() {
  const navigate = useHistory()

  const { user } = useSelector((state) => state.auth)
  
  useEffect(() => {

    if (!user) {
      navigate.push('/login')
    }

   
  }, [user, navigate])



  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.username}</h1>
        <p>You are now logged in</p>
      </section>

      
    </>
  )
}

export default Dashboard
