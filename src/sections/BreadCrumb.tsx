import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  currentPage: string;
}

const BreadCrumb:React.FC<Props> = ({currentPage}) => {
  return (
    <div className='container-xxl'>
      <div className='d-flex align-items-center mt-5'>
        <div className='breadcrumb'>
          <NavLink className='home' to='/'><i className='fa-solid fa-house'></i>Home</NavLink>
          <div className='breadcrumb-item-sec'>{currentPage}</div>
        </div>
      </div>
    </div> 
  )
}

export default BreadCrumb