import React from 'react'

const Landing: React.FC = () => {
  return (
    <div className="container-home">
    <div className="container-xxl">
        <div className="d-flex mt-5 justify-content-between align-items-center">
            <div className="img-container">
                <img src="http://jacke157-001-site2.ftempurl.com/fixxo-imgs/showcase-img-1.png" id="img-container-1" alt="woman model"/>
            </div>
            <div className="text-container">
                <h1 className="hero-text">Sale Up To 50% Off</h1>
                <span> Online shopping free home delivery over $100</span>
                <span className="btn" >shop now</span>
            </div>
            <div className="img-container">
                <img src="http://jacke157-001-site2.ftempurl.com/fixxo-imgs/showcase-img-2.png" id="img-container-2" alt="man model" />
            </div>
        </div>
    </div> 
</div>
  )
}

export default Landing