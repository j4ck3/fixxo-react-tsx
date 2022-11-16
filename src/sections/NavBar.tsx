import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuAction from '../components/MenuAction'


/* interface Props {
    fn: () => void
}
 */
const NavBar: React.FC = () => {


    const [showMenu, setShowMenu] = useState(false);

        const toggleMenu = () => {
                setShowMenu(!showMenu);
            };

  return (
    <div className="meny">
        <div className="container-xxl">
            <div className="meny-container">
                <menu className="meny-body">
                    <div className="meny-logo">
                        <h1>Fixxo.</h1>
                    </div>
                    <ul className={`meny-link-body ${ showMenu ? "d-flex" : ""}`}>
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/categories" end>Categories</NavLink></li>
                        <li><NavLink to="/product" end>Products</NavLink></li>
                        <li><NavLink to="/contact" end>Contact</NavLink></li>
                    </ul>
                    <ul className="meny-button d-flex">
                        <MenuAction linkAdress="/" faIcon="fa-solid fa-search"  />
                        <MenuAction linkAdress="/compare" faIcon="fa-solid fa-shuffle" />
                        <MenuAction linkAdress="/wishlist" faIcon="fa-solid fa-heart" qty={4} />
                        <MenuAction linkAdress="/cart" faIcon="fa-solid fa-bag-shopping" qty={9} />
                    </ul>
                    <div onClick={toggleMenu} className="meny-btn">
                        <i className={`fa-solid fa-bars ${ showMenu ? "d-none" : ""}`}></i>
                        <i className={`fa-solid fa-xmark ${ showMenu ? "" : "d-none"}`}></i>
                    </div>
                </menu>
            </div>
        </div>
    </div>

  )

}
export default NavBar