import React from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import BreadCrumb from '../sections/BreadCrumb'



const Wishlist:React.FC = () => {
  return (
    <>
      <NavBar />
      <BreadCrumb currentPage='Whishlist'/> 
      <Footer />
    </>

  )
}


export default Wishlist