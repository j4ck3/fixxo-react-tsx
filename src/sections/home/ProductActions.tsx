import React from 'react'

const ProductActions = () => {
  return (
    <>
    <div className="our-specality-container">
        <div className="container-xxl">
            <h1 className="featured-title">Our Speciality</h1>
            <div className="our-specality-body">
                <div className="our-specality-item">
                    <div className="our-specality-content">
                        <h3>Track Your Order</h3>
                        <a href="#"> Get Started<i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div className="image-container"></div>
                </div>
                <div className="our-specality-item">
                    <div className="our-specality-content">
                        <h3>Make a Return</h3>
                        <a href="#"> Get Started<i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div className="image-container"></div>
                </div>
                <div className="our-specality-item">
                    <div className="our-specality-content">
                        <h3>Request a Price
                            Adjustment</h3>
                        <a href="#"> Get Started<i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div className="image-container"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductActions