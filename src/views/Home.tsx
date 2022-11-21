import React, { useContext } from 'react'
import NavBar from '../sections/NavBar';
import Landing from '../sections/home/Landing';

import SaleBanner21 from '../sections/home/SaleBanner2_1';
import ProductModelGird from '../sections/Product_model_gird';
import SaleBanner11 from '../sections/home/SaleBanner1_1';
import ProductActions from '../sections/home/ProductActions';
import BigBannerModel from '../sections/BigBannerModel';
import BigBannerModelMirror from '../sections/BigBannerModelMirror';
import SaleBanner1 from '../sections/home/SaleBanner1';
import ProductModelCategory from '../sections/Product_model_category';
import SalesPoint from '../sections/home/SalesPoint';

import Footer from '../sections/Footer';
import { ProductsContext } from '../contexts/context'


interface Props {
  handleClick: (event: MouseEvent) => void;
}


const Home: React.FC<Props> = () => {

  const productsContext = useContext(ProductsContext) 

  return (
    <>
      <NavBar />
      <Landing />
      <SaleBanner21 />
      <ProductModelGird title="Featured Products" items={productsContext.featuredProducts} handleClick={handleClick} />
      <SaleBanner11 />
      <ProductActions />
      <BigBannerModel />
      <BigBannerModelMirror />
      <SaleBanner1 />
      <ProductModelCategory />
      <SalesPoint />
      <Footer />        
    </>
  )
}

export default Home