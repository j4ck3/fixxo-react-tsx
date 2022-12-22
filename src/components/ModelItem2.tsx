import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import Rating from './Rating'
interface Props {
    item: any
}


const model_item2:React.FC<Props> = ({item}) => {
const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextType
  return (
    <>
        <div className='card'>
            <div className='category-grid-item w-100 mb-4'>
                <div className="category-grid-body">
                <img className='model-item-img' src={item.imageName} alt={item.name} />
                    <ul className="model-item-menu">
                        <li><button type='button' title='add to wishlist'><i className="fa-solid fa-heart"></i></button></li>
                        <li><button type='button' title='compare this item'><i className="fa-solid fa-shuffle"></i></button></li>
                        <li><button type='button' title='add to Shopping cart' onClick={() => incrementQuantity({articleNumber: item._id, product: item, quantity: 0})}><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                    <NavLink to={`/products/product/${item._id}`} className="model-item-btn">quick view</NavLink>
                </div>
                
                <div className="model-item-info">
                <h4>{item.category}</h4>
                <h3>{item.name}</h3>

                <Rating N={item.rating} />
                <p>${item.price}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default model_item2