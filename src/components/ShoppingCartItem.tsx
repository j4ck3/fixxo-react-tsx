import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


interface Props {
  item: any
}

const ShoppingCartItem:React.FC<Props> = ({item}) => {

  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()
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
          <button title='remove' className='cart-btn' onClick={() => removeItem(item)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
      <div className='item-price'>
        <div>${item.product.price * item.quantity}</div>
      </div>

    </div>
  )
}

export default ShoppingCartItem