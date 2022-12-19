import React, { useState } from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import BreadCrumb from '../sections/BreadCrumb'

const Categories = () => {

  return (
    <>
      <NavBar />
      <BreadCrumb currentPage='Categories'/> 
      <Footer />
    </>

  )
}

export default Categories