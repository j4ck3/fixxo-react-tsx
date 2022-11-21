import React from 'react'


const model_item2:React.FC = () => {
  return (
    <>
        <div className='category-grid-item w-100'>
            <div className="category-grid-body">
                <ul className="arrivals-menu">
                    <li><button><i className="fa-solid fa-heart"></i></button></li>
                    <li><button><i className="fa-solid fa-shuffle"></i></button></li>
                    <li><button><i className="fa-solid fa-cart-shopping"></i></button></li>
                </ul>
                <a className="featured-btn" href="#">quick view</a>
            </div>
            <div className="featured-grid-info">
                <h4>Category</h4>
                <h3>Modern Black Blouse</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>$40</p>
            </div>
        </div>
    </>
  )
}

export default model_item2