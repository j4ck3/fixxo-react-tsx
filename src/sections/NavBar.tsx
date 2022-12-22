import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuAction from '../components/MenuAction'
import ShoppingCart from '../components/ShoppingCart'
import { useShoppingCartContext, ShoppingCartContextType } from '../contexts/ShoppingCartContext'


const NavBar:React.FC = () => {

    const { cartQuantity } = useShoppingCartContext() as ShoppingCartContextType


    const [showMenu, setShowMenu] = useState<boolean>(false);

        const toggleMenu = () => {
                setShowMenu(!showMenu);
            };


  return (
    <nav className='meny'>
        <div className='container-xxl'>
            <div className='meny-container'>
                <menu className='meny-body'>
                    <div className='meny-logo'>
                        <h1>Fixxo.</h1>
                    </div>
                    <ul className={`meny-link-body ${ showMenu ? 'd-flex' : ''}`}>
                        <li><NavLink to='/' end>Home</NavLink></li>
                        <li><NavLink to='/categories' end>Categories</NavLink></li>
                        <li><NavLink to='/products' end>Products</NavLink></li>
                        <li><NavLink to='/contact' end>Contact</NavLink></li>
                        <li><NavLink to='/users' end>Account</NavLink></li>
                    </ul>
                    <div className='meny-button d-flex'>
                        <MenuAction linkAdress='/' faIcon='fa-solid fa-search'  />
                        <MenuAction linkAdress='/compare' faIcon='fa-solid fa-shuffle' />
                        <MenuAction linkAdress='/wishlist' faIcon='fa-solid fa-heart' qty={0} />
                        <button type='button' title='shopping-cart' className='meny-button-cart position-relative' data-bs-toggle='offcanvas' data-bs-target='#shoppingCart' aria-controls='shoppingCart'>
                            <i className='fa-solid fa-bag-shopping'></i>
                            <span id="counter-1">{cartQuantity}</span>
                            <ShoppingCart />
                        </button>
   
                    </div>
                    <div onClick={toggleMenu} className='meny-btn'>
                        <i className={`fa-solid fa-bars ${ showMenu ? 'd-none' : ''}`}></i> 
                        <i className={`fa-solid fa-xmark ${ showMenu ? '' : 'd-none'}`}></i>
                    </div>
                </menu>
            </div>
        </div>
    </nav>

  )

}
export default NavBar