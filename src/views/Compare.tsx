import React from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import BreadCrumb from '../sections/BreadCrumb'



const Compare:React.FC = () => {
  return (
    <>
      <NavBar />
      <BreadCrumb currentPage='Compare'/> 
      <Footer />
    </>

  )
}

export default Compare