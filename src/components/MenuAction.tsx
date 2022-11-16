import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  linkAdress: string;
  faIcon: string;
  qty?: number;
}

const MenuAction: React.FC<Props> = ({linkAdress, faIcon, qty}) => {
  return (
    <> 
    <li className='position-relative'><NavLink to={linkAdress} end><i className={faIcon}></i><span id="counter-1">{qty}</span></NavLink></li>
    </>
  )
}

export default MenuAction