import React, { useState } from 'react'
import { IUserContext, UserContext} from '../contexts/UserContext'
import { UserRequest } from '../models/UserModels'

const CreateForm:React.FC = () => {
  const DEFUALT_VALUES: UserRequest = {firstName: '', lastName: '', email: '', password: ''}
    const [ formErrors, setFormErrors ] = useState<UserRequest>(DEFUALT_VALUES)
    const { userRequest, userSignIn, setUserRequest, setUserSignIn, signUp, signIn } = React.useContext(UserContext) as IUserContext


    const handleChange = ()=> {
      setFormErrors(validate(userRequest))
    }

    const validate = (userRequest: UserRequest) => {
      const errors = {firstName: '', lastName: '', email: '', password: ''}
      const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      const regex_name = /^[A-Za-z]{1,30}$/
      const regex_password = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!#$%^&*()\-__+.]){1,}).{8,}$/
  
      //firstName
        if (userRequest.firstName.length <= 1)
          errors.firstName = 'Name must be at least two character long'
          else if (!regex_name.test(userRequest.firstName))
            errors.firstName = 'Name can only contain only letters'

        if (userRequest.lastName.length <= 1)
        errors.lastName = 'Last Name must be at least two character long'
        else if (!regex_name.test(userRequest.lastName))
          errors.lastName = 'Last Name can only contain only letters'
  
      //email
      if (!regex_email.test(userRequest.email))
        errors.email = 'You must enter a valid Email Adress'
      
      //password
      if (!regex_password.test(userRequest.password))
        errors.password = 'Password must be at least 8 characters long & contain one uppercase and lowercase letter, one number & one special charachter (!#$&*)'
  
      return errors;
    }

  return (
    <div className='container-sm'>
        <form onSubmit={signUp} noValidate className='my-5 d-gird'>
          <h3 className='text-center'>Sign Up</h3>
            <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} onKeyUp={handleChange} type='text' className='form-control py-2 my-2' placeholder='Name'></input>
            <div className='error-message'>{formErrors.firstName}</div>
            <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} onKeyUp={handleChange}  type='text' className='form-control py-2 my-2' placeholder='Last Name'></input>
            <div className='error-message'>{formErrors.lastName}</div>
            <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} onKeyUp={handleChange}  type='email' className='form-control py-2 my-2' placeholder='E-mail'></input>
            <div className='error-message'>{formErrors.email}</div>
            <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} onKeyUp={handleChange}  type='password' className='form-control py-2 my-2' placeholder='Password'></input>
            <div className='error-message'>{formErrors.password}</div>
            <button className='border-0 rounded mt-2' type='submit'>Sign Up</button>
        </form>

        <div className='container-sm'>
        <form onSubmit={signIn} noValidate className='my-5 d-gird'>
          <h3 className='text-center'>Sign In</h3>
            <input value={userSignIn.email} onChange={(e) => setUserSignIn({...userSignIn, email: e.target.value})} type='email' className='form-control py-2 my-2' placeholder='E-mail'></input>
            <input value={userSignIn.password} onChange={(e) => setUserSignIn({...userSignIn, password: e.target.value})} type='password' className='form-control py-2 my-2' placeholder='Password'></input>
            <button className='border-0 rounded mt-2' type='submit'>Sign In</button>
        </form>
    </div>
    </div>



  )
}

export default CreateForm