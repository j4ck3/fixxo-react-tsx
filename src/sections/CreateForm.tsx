import React from 'react'
import { IUserContext, UserContext} from '../contexts/UserContext'

const CreateForm:React.FC = () => {

    const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext


  return (
    <div className='container-sm'>
        <form onSubmit={create} noValidate className='my-5 d-gird'>
          <h3 className='text-center'>Create User</h3>
            <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type='text' className='form-control py-2 my-2' placeholder='Enter your Name'></input>
            <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type='text' className='form-control py-2 my-2' placeholder='Enter your Last Name '></input>
            <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type='email' className='form-control py-2 my-2' placeholder='Enter your Email Adress'></input>
            <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type='password' className='form-control py-2 my-2' placeholder='Enter a Password'></input>
            <button className='border-0 rounded mt-2' type='submit'>CREATE USER</button>
        </form>
    </div>
  )
}

export default CreateForm