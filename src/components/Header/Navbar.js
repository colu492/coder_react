import React from "react";
import logo from "../../icons/logo.png"
import './Navbar.css'
import CartWidget from './CartWidget.js'
import {NavLink} from 'react-router-dom';

const Navbar = ({children}) =>{

    return (
        <div className='contenedor_header'>
            <NavLink to='/'>
                <img src={logo} alt="" />
            </NavLink>
            {children}
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='category/legendario'>Legendario</NavLink></li>
                    <li><NavLink to='category/epico'>Epico</NavLink></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar