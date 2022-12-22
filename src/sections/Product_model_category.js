import React from 'react'
import ModelItem2 from '../components/ModelItem2'

const Product_model_category = ({items}) => {
  
  const data = items
  let itemsFirst = data.slice(0, 3);
  let itemsMid = data.slice(3,6);
  let itemsLast = data.slice(6,9);
  return (
    <>
      <div className='container-xxl'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4'>
        <div className="col"><div className='mb-4 category-header'>Latest Product</div>
          {itemsFirst.map(products => <ModelItem2 key={products._id} item={products}/>)}
        </div>
        <div className="col"><div className='mb-4 category-header'>Best Selling Product</div>
          {itemsMid.map(products => <ModelItem2 key={products._id} item={products}/>)}
        </div>
        <div className="col"><div className='mb-4 category-header'>Top Rated Product</div>
          {itemsLast.map(products => <ModelItem2 key={products._id} item={products}/>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Product_model_category