import React, { useState } from 'react'


interface Props  {
    form_count: number;
}

const ProductFormInput:React.FC<Props> = ({form_count = 1}) => {

    const [count, setCount] = useState(form_count)
    const increment = () => {
        setCount (current => current + 1)
    }
    const decrement = () => {
        if (count <= 1 ){}
        else{
            setCount (current => current - 1)
        }

    }
  return (
     <div className="product-input-container">
        <label className="label-product" htmlFor="number">Qty:</label>
        <div className="product-input-qty-container d-flex justify-content-center">
            <span className="product-input-qty" data-testid='inputqty'>{count}</span>
            <div id="inc-button" onClick={() => increment()} className="spinner-button" data-testid='inc-button'>+</div>
            <div id="dec-button" onClick={() => decrement()}  className="spinner-button">-</div>
        </div>
        <button className="button-product" type="submit">ADD TO CART</button>
     </div>
  )
}

export default ProductFormInput