import React, { useEffect } from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { User } from '../models/UserModels'

const UserList:React.FC = () => {

    const {users, getAll, remove, get} = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()
    }, [getAll])

    const removeUser = (id: String) => {
        remove(id)
    }

    const getUser = (id: String) => {
        get(id)
    }

/*     const notSignedInMSG = () => {
        if (users.length === 0)
        return <h2 className='text-center'>Login to see a list of users</h2>
    } */

    return (
        <div className='container-sm'>
            <h3 className='text-center my-5'>List Of Users<i className="fa-solid fa-users"></i></h3>
{/*             {notSignedInMSG()} */}
            {
                users.map((user: User) => (  
                <div className='my-3 w-100'>{user.firstName} {user.lastName} {user.email}

                    <div className='d-inline-block'>
                        <button type='button' title={`Remove User ${user.firstName}`} className='border-0 rounded' onClick={() => removeUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                        <button type='button' title='Edit User' className='border-0 rounded' onClick={() => getUser(user._id)}><i className="fa-solid fa-edit"></i></button>
                    </div>
                </div>
                ))  
            }
        </div>
        
  )

}

export default UserList

