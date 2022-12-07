import React from 'react'
import ModelItem from '../components/ModelItem'
import { ProductItem } from '../models/ProductModels'

interface Props {
  title: string
  items: ProductItem[]
}

const Product_model_gird:React.FC<Props> = ({title, items}) => {

  return (
    <>
     <div className="container-xxl mb-5">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {
            items.map(products => <ModelItem key={products.articleNumber} item={products}/>)
          }
        </div>
    </div>
    </>
  )
}

export default Product_model_gird