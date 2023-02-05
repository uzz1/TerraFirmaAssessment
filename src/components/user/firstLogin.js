import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


function FirstLogin() {
  const navigate = useHistory()

  const { user } = useSelector((state) => state.auth)
  
  



  return (
    <>
      <section className='heading'>
        <h1>Login to access this page</h1>
      </section>

      
    </>
  )
}

export default FirstLogin
