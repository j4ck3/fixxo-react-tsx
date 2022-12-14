import React, { useEffect } from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import BreadCrumb from '../sections/BreadCrumb'
import ProductModelGird from '../sections/Product_model_gird'
import CreateProduct from '../sections/CreateProduct'
import ProductTable from '../sections/ProductTable'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'


const Products:React.FC = () => {
    const {products, getProducts } = useProductContext() as ProductContextType

    useEffect(() =>{
        getProducts()
    }, [getProducts])

  return (
    <>
        <NavBar/>
        <BreadCrumb currentPage='Products' />
        <ProductModelGird title='All Products' items={products} />
        <ProductTable items={products} />
        <CreateProduct/>

        <Footer/>
    </>
  )
}

export default Products