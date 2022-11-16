import React from 'react'
import ModelItem2 from '../components/ModelItem2'
const Product_model_category:React.FC = () => {
  return (
    <>
    <div className="container-xxl">
    <div className="category-grid">
        <div id="cetegory-header-1" className="category-header">Latest Product</div>
        <div id="cetegory-header-2" className="category-header">Best Selling Product</div>
        <div id="cetegory-header-3" className="category-header">Top Reacted Product</div>
        <div id="category-grid-item-1" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-2" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-3" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-4" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-5" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-6" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-7" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-8" className="category-grid-item">
        <ModelItem2 />
        </div>
        <div id="category-grid-item-9" className="category-grid-item">
        <ModelItem2 />
        </div>
    </div>
</div>
    </>
  )
}

export default Product_model_category