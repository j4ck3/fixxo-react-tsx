import React, { useEffect } from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { User } from '../models/UserModels'


const UserList:React.FC = () => {

    const {users, getAll, remove} = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()
    }, [getAll])


    return (
        <>
            <h3>List Of Users<i className="fa-solid fa-users"></i></h3>
            {
                users.map((user: User) => (<div key={user.id} className='mb-3'>{user.firstName} {user.lastName}<button onClick={() => remove(user.id)}><i className="fa-solid fa-trash"></i></button> </div>))
            }
        </>
  )
}

export default UserList