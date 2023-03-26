import React from "react";
import './item.css';
import {Link} from 'react-router-dom';


const Item = ({info}) => {

    return (
        <div className="ItemCard">
            <img src={info.image}  alt={info.title}/>
            <h3>{info.title}</h3>
            <p>{info.category}</p>
            <p>{info.price}</p>
            <Link to={`./detalle/${info.id}` } className="enlace_detalle">Detalles</Link>
        </div>
    );
}

export default Item;