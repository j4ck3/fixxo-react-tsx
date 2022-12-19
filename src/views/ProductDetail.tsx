import React, {useEffect, useState} from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs'
import { TabSelector } from '../views/TabSelector'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'


import product_img_1 from '../sections/home/imgs/home-container-1.svg'
import product_img_2 from '../sections/home/imgs/home-container-2.svg'

import NavBar from '../sections/NavBar'
import SaleNote from '../sections/SaleNote'
import BreadCrumb from '../sections/BreadCrumb'
import ProductModelGird from '../sections/Product_model_gird'
import ReadMore from '../components/ReadMore'
import DropDown from '../components/DropDown'
import ProductFormInput from '../components/ProductFormInput'


//vendor name

const Product:React.FC = () => {
  const id = useParams()
  const {product, getProduct} = useProductContext() as ProductContextType

  useEffect(() => {
    let productId = id.articleNumber
    getProduct(productId)
  }, [])

const [selected, setSelected] = useState<string>('Choose an Option')
const [selectedTab, setSelectedTab] = useTabs([
    'Description',
    'Additional',
    'Shopping-Returns',
    'Reviews',
]);

  return (
    <>
    <NavBar />
    <SaleNote />
    <BreadCrumb currentPage={product.name} />

    <div className="container-xxl">
    <div className="row mt-5 product-container">
        <div className="col-md-6">
            <div className="images">
                <div className="text-center mb-4"><img id="main-image" src={product.imageName} alt="product" /></div>
                    <div className="text-center"> <img className="sec-image" src={product_img_1} alt="product" />
                                                  <img className="sec-image" src={product_img_2} alt="product" />
                    </div>
            </div>
        </div>
        <div className='col'>
        <div className="col-2 w-100">
            <h1>{product.name}</h1>
            <h3 className="text-uppercase">{product.category}</h3>
            <div className="product-rating mt-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <h4 className="mt-3">${product.price}</h4>

            <ReadMore>
              {product.description}
            </ReadMore>

                <div className="product-input-container">
                    <label className="label-product">Size: </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="S"  />
                        <span className="product-input-size-text">S</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="M" defaultChecked />
                        <span className="product-input-size-text">M</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size" value="L" />
                        <span className="product-input-size-text">L</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="XL" />
                        <span className="product-input-size-text">XL</span>
                    </label>
                </div>

                <div className="product-input-container">
                    <label className="label-product" htmlFor="color">Color:</label>
                    <DropDown selected={selected} setSelected={setSelected} />
                </div>


                <ProductFormInput form_count={1} item={product} />
                
                <div className="product-input-container">
                    <label className="label-product">Share:</label>
                    <div className="product-share d-flex">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='container-xxl'>
<nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === 'Description'}
          onClick={() => setSelectedTab('Description')}
        >
        Description
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Additional'}
          onClick={() => setSelectedTab('Additional')}
        >
          Additional
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Shopping-Returns'}
          onClick={() => setSelectedTab('Shopping-Returns')}
        >
          Shopping & Returns
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Reviews'}
          onClick={() => setSelectedTab('Reviews')}
        >
          Reviews
        </TabSelector>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "Description"}>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. 
            * Village did removed enjoyed explain nor ham saw calling talking.
            * Securing as informed declared or margaret.
            * Joy horrible moreover man feelings own shy.
            On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Additional"}>Additional</TabPanel>
        <TabPanel hidden={selectedTab !== "Shopping-Returns"}>Shopping & Returns</TabPanel>
        <TabPanel hidden={selectedTab !== "Reviews"}>Reviews</TabPanel>
      </div>
</div>


{/*     <ProductModelGird title="Featured Products"/> */}



    </>
  )
}



export default Product