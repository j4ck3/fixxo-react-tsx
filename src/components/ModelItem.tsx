import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'


interface Props {
    item: ProductItem
}



const ModelItem:React.FC<Props> = ({item}) => {

/* const stars = Array.from({length: amount}, (e, id) => { */

const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <>
        <div className="col">
            <div className='card'>
                <div className="model-item-body w-100">
                    <img className='model-item-img' src={item.imageName} alt={item.name} />
                    <ul className='model-item-menu'>
                        <li><button><i className="fa-solid fa-heart"></i></button></li>
                        <li><button><i className="fa-solid fa-shuffle"></i></button></li>
                        <li><button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 0})}><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                    <NavLink to={`/products/product/${item.articleNumber}`} className="model-item-btn">quick view</NavLink>
                </div>
                <div className="model-item-info">
                    <h4>{item.category}</h4>
                    <h3>{item.name}</h3>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModelItem