import React from 'react'
import ModelItem from '../components/ModelItem'

interface Props {
  title: string;
  items: any;
  handleClick: (event: MouseEvent) => void;

}


const Product_model_gird:React.FC<Props> = ({title, items = [], handleClick}) => {

  return (
    <>
     <div className="container-xxl">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {
            items.map((products: { articleNumber: React.Key }) => <ModelItem key={products.articleNumber} item={products} handleClick={handleClick}/>)
          }
        </div>
    </div>
    </>
  )
}

export default Product_model_gird