import React from 'react'
import { IUserContext, UserContext} from '../contexts/UserContext'

const CreateForm:React.FC = () => {
    const { userSignIn, formErrors, signUpForm, isSignedIn, setUserSignIn, signUp, signIn, handleChange, signOutHandler} = React.useContext(UserContext) as IUserContext

    
  return (
<>
<div className='container d-flex justify-content-between w-100 mt-5'>
  <form onSubmit={signUp} className='account-form'>
      <h2>Sign Up</h2>
      <input className={`${ formErrors.firstName ? "error" : ""}`} value={signUpForm.firstName} onChange={handleChange} type='text' placeholder='Name' id='firstName'></input>
      <div className='error-message'>{formErrors.firstName}</div>
      <input className={`${ formErrors.lastName ? "error" : ""}`} value={signUpForm.lastName} onChange={handleChange} type='text' placeholder='Last Name' id='lastName'></input>
      <div className='error-message'>{formErrors.lastName}</div>
      <input className={`${ formErrors.email ? "error" : ""}`} value={signUpForm.email} onChange={handleChange} type='email' placeholder='E-mail' id='email'></input>
      <div className='error-message'>{formErrors.email}</div>
      <input className={`${ formErrors.password ? "error" : ""}`} value={signUpForm.password} onChange={handleChange} type='password' placeholder='Password' id='password'></input>
      <div className='error-message'>{formErrors.password}</div>
      <button className='mt-3 account-btn' type='submit'>Sign Up</button>
  </form>

  <form onSubmit={signIn} className='account-form'>
    <h2>Sign In</h2>
      <input required value={userSignIn.email} onChange={(e) => setUserSignIn({...userSignIn, email: e.target.value})} type='email' className='account-input' placeholder='E-mail'></input>
      <input required value={userSignIn.password} onChange={(e) => setUserSignIn({...userSignIn, password: e.target.value})} type='password' className='account-input' placeholder='Password'></input>
      { isSignedIn ? (<> <button className='mt-3 account-btn' type='button' title='signout' onClick={() => signOutHandler()}>SIGN OUT</button></>) : (<><button className='mt-3 account-btn' type='submit'>Sign In</button></>)}
  </form>
</div>
</>
  )
}

export default CreateForm