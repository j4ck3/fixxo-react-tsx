import React, { useEffect } from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { User } from '../models/UserModels'

const UserList:React.FC = () => {

    const {users, getAll, remove, get} = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()
    }, [getAll])

    const removeUser = (id: number) => {
        remove(id)
    }

    const getUser = (id: number) => {
        get(id)
    }

    return (
        <div className='container-sm'>
            <h3 className='text-center'>List Of Users<i className="fa-solid fa-users"></i></h3>
            {
                users.map((user: User) => (

                <div key={user.id} className='my-3 w-100'>{user.id} {user.firstName} {user.lastName} {user.email}
                    <div className='d-inline-block'>
                        <button className='border-0 rounded' onClick={() => removeUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                        <button className='border-0 rounded' onClick={() => get(user.id)}><i className="fa-solid fa-user"></i></button>
                    </div>
                </div>
                
                ))
            }
        </div>
  )
}

export default UserList