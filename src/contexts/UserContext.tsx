import React, {useState, useContext, createContext} from 'react'
import { Params } from 'react-router-dom'
import { User, UserRequest} from '../models/UserModels'
import { UserProviderProps } from '../models/UserProviderPropsModels'


export interface IUserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

const UserProvider = ({children} : UserProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/users'
    const defaultUserValues: User = {id: 0, firstName: '', lastName: '', email: ''}
    const defaultUserRequestValues: UserRequest = {firstName: '', lastName: '', email: '', password: ''}

    const [user, setUser] = useState<User>(defaultUserValues)
    const [users, setUsers] = useState<User[]>([])
    const [userRequest, setUserRequest] = useState<UserRequest>(defaultUserRequestValues)



    const create = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${baseUrl}`, { 
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
    const get = async (id: number) => {
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
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
        if (result.status === 204) {
            setUser(defaultUserValues) 
        }
    }



  return (
    <UserContext.Provider value={{user, setUser, users, userRequest, setUserRequest, create, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider