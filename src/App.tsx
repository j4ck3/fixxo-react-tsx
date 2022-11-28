import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContext } from './contexts/context'

import './App.css'

import Home from './views/Home';

import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Product from './views/Product';
import Wishlist from './views/Wishlist';
import Compare from './views/Compare';
import Contact from './views/Contact';


const App: React.FC = () => {




  const [products, setProducts] = useState ({ 
    allProducts: [],
    featuredProducts: []
  })

  useEffect (() => {
    const fetchAllProducts= async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, allProducts: await result.json()}) 
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()}) 
    }
    fetchFeaturedProducts()

  }, [setProducts])

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
      <Routes>
        <Route path='/' element={<Home handleClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): JSX.Element { throw new Error('Function not implemented.')} } />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Categories' element={<Categories /> } /> 
        <Route path='/Product' element={<Product name={undefined} item={undefined} handleClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
            throw new Error('Function not implemented.');} } /> } />
        <Route path='/Wishlist' element={<Wishlist /> } />
        <Route path='/Compare' element={<Compare /> } />

        <Route path='*' element={<NotFound />} />
      </Routes>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
