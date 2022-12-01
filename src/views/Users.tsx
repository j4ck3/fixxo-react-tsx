import React from 'react'
import BreadCrumb from '../sections/BreadCrumb'
import CreateForm from '../sections/CreateForm'
import Footer from '../sections/Footer'
import NavBar from '../sections/NavBar'
import UserList from '../sections/UserList'

const Users:React.FC = () => {
  return (
    <>
        <NavBar/>
        <BreadCrumb currentPage='Users' />
        <CreateForm />
        <UserList />
        <Footer/>
    </>
  )
}

export default Users