import React from 'react'
import CreateForm from '../sections/CreateForm'
import UserList from '../sections/UserList'

const Users:React.FC = () => {
  return (
    <>
        <CreateForm />
        
        <UserList />
    </>
  )
}

export default Users