import React, {useState, useContext, createContext} from 'react'
/* import { Params } from 'react-router-dom' */
import { User, UserRequest, UserSignIn} from '../models/UserModels'
import { UserProviderProps } from '../models/UserProviderPropsModels'


export interface IUserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    userSignIn: UserSignIn
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    setUserSignIn: React.Dispatch<React.SetStateAction<UserSignIn>>
    users: User[]
    signUp: (e: React.FormEvent) => void
    signIn: (e: React.FormEvent) => void
    get: (id: String) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: String) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

const UserProvider = ({children} : UserProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/authentication'
    const defaultUserValues: User = {id: '', firstName: '', lastName: '', email: ''}
    const defaultUserRequestValues: UserRequest = {firstName: '', lastName: '', email: '', password: ''}
    const defualtSignInValues: UserSignIn = {email: '', password: ''}

    const [user, setUser] = useState<User>(defaultUserValues)
    const [users, setUsers] = useState<User[]>([])
    const [userRequest, setUserRequest] = useState<UserRequest>(defaultUserRequestValues)
    const [userSignIn, setUserSignIn] = useState<UserSignIn>(defualtSignInValues)



    const signUp = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${baseUrl}/signup`, { 
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
        const result = await fetch(`${baseUrl}/signin`, { 
            method: 'POST',
            headers: {
                'Content-Type': `application/json`
            } ,
            body: JSON.stringify(userSignIn)
        })
        if (result.status === 201) {
            setUserSignIn(defualtSignInValues)    
        }
    }

    const get = async (id: String) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200) {
            setUser(await result.json())
        }
    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200) {
            setUsers(await result.json())
        }
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${baseUrl}/${user.id}`, {
            method: 'put',
            headers: {
                'Content-Type': `application/json`
            } ,
            body: JSON.stringify(user)
        })
        if (result.status === 200) {
            setUser(await result.json()) 
        }
    }
    const remove = async (id: String) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
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