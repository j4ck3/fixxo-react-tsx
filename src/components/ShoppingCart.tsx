import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart:React.FC = () => {

  const { items } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="shoppingCartLabel">Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            items.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
          }
        </div>
        <button className='checkout-btn'>Proceed to Checkout</button> 
      </div>
    </>
  )
}

export default ShoppingCart