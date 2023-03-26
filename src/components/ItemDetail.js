import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import './ItemDetail.css';
import AgregarCarrito from "../components/ItemCount.js"; 
import { Link } from "react-router-dom";

export const ItemDetail = ({detail}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addToCart} = useCartContext();

    const onAdd = (cantidad) => {
        setGoToCart(true);
        addToCart(detail, cantidad)
    };

    return(
        <div className="detail_container">
                <img src={detail.image} alt="{detail}"/>
                <div className="detail_info">
                    <h1>{detail.title}</h1>
                    <p>{detail.description}</p>
                    {
                        goToCart
                        ? <>
                        <Link to='/Cart'> Pagar </Link>
                        <Link  to = '/'> Volver</Link>
                        </>
                        :    <AgregarCarrito initial={1} stock={5} onAdd={onAdd}/>
                    }
                </div>
        </div>
    );
}

export default ItemDetail;