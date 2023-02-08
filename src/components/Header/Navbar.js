import React from "react";
import logo from "../../icons/logo.png"
import './Navbar.css'
import CartWidget from './CartWidget.js'

const Navbar = ({children}) =>{

    return (
        <div class='contenedor_header'>
            <img src={logo} alt="" />    
            {children}
            <nav>
                <ul>
                    <li><a href="https://www.golloadventures.com">Principal</a></li>
                    <li><a href="https://opensea.io/es/collection/gollo-adventures">OpenSea</a></li>
                    <li><a href="https://v2.woonkly.com/user/golloadventures">Woonkly</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar