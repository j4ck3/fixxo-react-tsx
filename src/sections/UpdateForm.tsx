import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IUserContext, UserContext} from '../contexts/UserContext'

const UpdateForm = () => {
    const id = useParams()
    const {user, setUser, get, update} = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        get(id) 
      }, [get, id])
  


  return (
    <>
        <form onSubmit={update}>
            <h3>Update User <i className="fa-solid fa-user-pen"></i></h3>
            <input type='hidden' value={user.id}/>
            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type='text' className='form-control py-2' placeholder='Enter your Name'></input>
            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} type='text' className='form-control py-2' placeholder='Enter your '></input>
            <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type='email' className='form-control py-2' placeholder='Enter your Email Adress'></input>
            <button type='submit'>UPDATE USER</button>
        </form>
    </>
  )
}

export default UpdateForm