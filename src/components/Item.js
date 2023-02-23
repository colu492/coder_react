import React from "react";
import './item.css';
import {NavLink} from 'react-router-dom';

const Item = ({info}) => {

    return (
        <div className="ItemCard">
            <img src={info.image}  alt={info.title}/>
            <h3>{info.title}</h3>
            <p>{info.price}</p>
            <NavLink to='/detalle'>Detalle</NavLink>
        </div>
    );
}

export default Item;