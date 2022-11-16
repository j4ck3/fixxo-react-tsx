import React from 'react'
import ModelItem3 from '../components/ModelItem3'
const BigBannerModelMirror:React.FC = () => {
  return (
    <>
        <div className="container-xxl">
        <div className="sec-grid mirror">
            <div className="sec-grid-big mirror-item">
                <h1>TO FOR USD $29</h1>
                <a className="btn-dark white" href="#">flash sale</a>
            </div>
            <div id="sec-grid-item-1" className="sec-grid-item mirror-item">
            <ModelItem3 />
            </div>
            <div id="sec-grid-item-2" className="sec-grid-item mirror-item">
            <ModelItem3 />
            </div>
            <div id="sec-grid-item-3" className="sec-grid-item mirror-item">
            <ModelItem3 />
            </div>
            <div id="sec-grid-item-4" className="sec-grid-item mirror-item">
            <ModelItem3 />
            </div>
        </div>
    </div>
    </>
  )
}

export default BigBannerModelMirror