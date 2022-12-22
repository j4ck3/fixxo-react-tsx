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

    signUp: (e: React.FormEvent) => void
    signIn: (e: React.FormEvent) => void
    userRequest: UserRequest
    userSignIn: UserSignIn
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    setUserSignIn: React.Dispatch<React.SetStateAction<UserSignIn>>
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
    const [userRequest, setUserRequest] = useState<UserRequest>(defaultUserRequestValues)
    const [userSignIn, setUserSignIn] = useState<UserSignIn>(defualtSignInValues)



    const signUp = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${authUrl}/signup`, { 
            method: 'POST',
            headers: {
                'Content-Type': `application/json`
            } ,
            body: JSON.stringify(userRequest)
        })
        if (result.status === 201) {
            setUserRequest(defaultUserRequestValues)    
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
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (result.status === 204) {
            setUser(defaultUserValues) 
        }
    }



  return (
    <UserContext.Provider value={{user, setUser, users, userRequest, userSignIn, setUserRequest, setUserSignIn, signUp, signIn, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider