import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { cartItem } from '../models/ShoppingCartModels'

interface Props {
  item: cartItem
}


const ShoppingCartItem:React.FC<Props> = ({item}) => {

  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className='cartitem'>
      <div className='cartitem-image'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='cartitem-info'>
        <div className='cartitem-name'>{item.product.name}</div>
        <div className='cartitem-qty'>
          <button title='minus' className='cart-btn' onClick={() => decrementQuantity(item)}><i className="fa-solid fa-minus"></i></button>
          <span>{item.quantity}</span>
          <button title='plus' className='cart-btn' onClick={() => incrementQuantity(item)}><i className="fa-solid fa-plus"></i></button>
          <button title='remove' className='cart-btn' onClick={() => removeItem(item.articleNumber)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
      <div className='item-price'>
        <div>${item.product.price * item.quantity}</div>
      </div>

    </div>
  )
}

export default ShoppingCartItem