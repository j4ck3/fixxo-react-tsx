import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductProvider from './contexts/ProductContext'
import UserProvider from './contexts/UserContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Wishlist from './views/Wishlist';
import Compare from './views/Compare';
import Contact from './views/Contact';
import Users from './views/Users';
import Product from './views/ProductDetail';
import Products from './views/Products';
import './App.min.css'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <ShoppingCartProvider>
          <ProductProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Categories' element={<Categories /> } /> 
              <Route path='/Products/Product/:articleNumber' element={<Product /> } /> 
              <Route path='/Products' element={<Products /> } /> 
              <Route path='/Users' element={<Users /> } /> 
              <Route path='/Wishlist' element={<Wishlist /> } />
              <Route path='/Compare' element={<Compare /> } />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ProductProvider>
        </ShoppingCartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
