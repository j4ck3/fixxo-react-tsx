import React, {useState, useContext, createContext} from 'react'
import { User, UserRequest, UserSignIn} from '../models/UserModels'
import { UserProviderProps } from '../models/UserProviderPropsModels'

export interface IUserContext {
    user: User
    users: User[]
    setUser: React.Dispatch<React.SetStateAction<User>>
    
    get: (id: String) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: String) => void
    handleChange: (e: { target: { id: string; value: string } }) => void
    signUp: (e: React.FormEvent) => void
    signIn: (e: React.FormEvent) => void
    
    userSignIn: UserSignIn
    setUserSignIn: React.Dispatch<React.SetStateAction<UserSignIn>>

    signUpForm: UserRequest
    setSignUpForm: React.Dispatch<React.SetStateAction<UserRequest>>

    formErrors: UserRequest
    setFormErrors: React.Dispatch<React.SetStateAction<UserRequest>>
    signOutHandler: () => void
    isSignedIn: boolean;
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

const UserProvider = ({children} : UserProviderProps) => {
    const authUrl = 'http://localhost:5000/api/authentication'
    const userUrl = 'http://localhost:5000/api/users'
    const defaultUserValues: User = {_id: '', firstName: '', lastName: '', email: ''}
    const defaultUserRequestValues: UserRequest = {firstName: '', lastName: '', email: '', password: ''}
    const defualtSignInValues: UserSignIn = {email: '', password: ''}

    const [user, setUser] = useState<User>(defaultUserValues)
    const [users, setUsers] = useState<User[]>([])
    const [userSignIn, setUserSignIn] = useState<UserSignIn>(defualtSignInValues)
    const [formErrors, setFormErrors] = useState<UserRequest>(defaultUserRequestValues)
    const [signUpForm, setSignUpForm] = useState<UserRequest>(defaultUserRequestValues)
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

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

          //lastName
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


      const signOutHandler = () => {
        localStorage.removeItem('accessToken')
        setIsSignedIn(false)
      }

    const handleChange = (e: { target: { id: string; value: string } })=> {
        const {id, value} = e.target
        setSignUpForm({...signUpForm, [id]: value})
        setFormErrors(validate(signUpForm))
      }

    const signUp = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${authUrl}/signup`, { 
            method: 'POST',
            headers: {'Content-Type': `application/json`} ,
            body: JSON.stringify(signUpForm)
        })
        if (result.status === 201) {
            setSignUpForm(defaultUserRequestValues)    
        }
    }

    const signIn = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${authUrl}/signin`, { 
            method: 'POST',
            headers: {
                'Content-Type': `application/json`
            },
            body: JSON.stringify(userSignIn)
            
        })
        if (result.status === 200) {
            setUserSignIn(defualtSignInValues)
            setIsSignedIn(true)
            const data = await result.json()
            localStorage.setItem('accessToken', data.accessToken)
        }
    }

    const get = async (id: String) => {
        const result = await fetch(`${userUrl}/${id}`)
        if (result.status === 200) {
            setUser(await result.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(userUrl, { 
            method: 'GET',
            headers: {
                'Content-Type': `application/json`,
            }
        })
        if (res.status === 200) {
            setUsers(await res.json())
        }
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${userUrl}/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': `application/json`,
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
        if (result.status === 200) {
            setUser(await result.json()) 
        }
    }

    const remove = async (id: String) => {
        const result = await fetch(`${userUrl}/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        })
        if (result.status === 204) {
            setUser(defaultUserValues) 
        }
    }



  return (
    <UserContext.Provider value={{user, users, userSignIn, formErrors, signUpForm, isSignedIn, setSignUpForm, setFormErrors, setUser, handleChange, setUserSignIn, signUp, signIn, get, getAll, update, remove, signOutHandler}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider

