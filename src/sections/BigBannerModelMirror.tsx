import React from 'react'
import ModelItem from '../components/ModelItem'
import { ProductItem } from '../models/ProductModels'

interface Props { 
  items: ProductItem[]
}

const BigBannerModelMirror:React.FC<Props> = ({items}) => {
  return (
    <>
        <div className="container-xxl">
        <div className="sec-grid">
            <div className="sec-grid-big sec-grid-big-2">
                <h1 className='sec-grid-title'>TO FOR USD $29</h1>
                <a className="btn-dark white" href="#">flash sale</a>
            </div>
            <div id="sec-grid-item-2">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4">
                {
                  items.map(products => <ModelItem key={products.articleNumber} item={products}/>)
                }
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BigBannerModelMirror