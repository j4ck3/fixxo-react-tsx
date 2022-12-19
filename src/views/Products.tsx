import React, { useEffect } from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import BreadCrumb from '../sections/BreadCrumb'
import ProductModelGird from '../sections/Product_model_gird'
import CreateProduct from '../sections/CreateProduct'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const Products:React.FC = () => {
    const {products, getProducts } = useProductContext() as ProductContextType

    useEffect(() =>{
        getProducts()
    }, [])

  return (
    <>
        <NavBar/>
        <BreadCrumb currentPage='Products'/>
        <ProductModelGird title='All Products' items={products}  />
        <CreateProduct/>
        <Footer/>
    </>
  )
}

export default Products