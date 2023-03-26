import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import Formulario from './Form';
import './cart.css';

export const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const {deleteItem} = useCartContext();
    const [comprador, setComprador] = useState({});
    const [ventaCompletada, setVentaCompletada] = useState(false);

    const venta = {
        comprador: comprador,
        items: cart.map((nft) => ({
            id: nft.id,
            title: nft.title,
            price: nft.price,
            quantity: nft.quantity, })),
        total: totalPrice(),
        time: serverTimestamp()
    };

    const handlerClick = () => {
        const db = getFirestore();
        const sellCollection = collection(db, 'orders');
        addDoc(sellCollection, venta)
        .then(res=>{console.log(res.id);
        setVentaCompletada(true);})
        .catch(error =>{
            alert("Error al agregar NFT: ", error);
        });

    }
    const actualizarDatos = (nuevoComprador) =>{
        setComprador(nuevoComprador);
    }

    if (cart.length === 0) {
        return (
            <>
            <p className="texto_indicativo">No has agregado nada aun...</p>
            <Link to='/' className="boton_volver">Volver y comprar</Link>
            </>
        )
    }

    if (ventaCompletada) {
        return (
            <>
            <div className="mensaje_final">
                <p>Gracias por tu apoyo a la comunidad de Gollo Adventures.</p>
                <p>A continuación se muestran los detalles de tu compra:</p>
                <ul>
                    <li>Nombre: {comprador.nombre}</li>
                    <li>Correo: {comprador.correo}</li>
                    <li>Teléfono: {comprador.telefono}</li>
                    <li>Dirección: {comprador.direccion}</li>
                    <li>Total: {totalPrice()} ETH</li>
                    <li>Items:</li>
                    <ul>
                        {cart.map(product => {
                            return (
                                <li key={product.id}>
                                    {product.title} ({product.quantity} x {product.price} ETH) = {product.quantity * product.price} ETH
                                </li>
                            )
                        })}
                    </ul>
                </ul>
                </div>
            </>
        );
    }

    return (
        <>
        {
            
            cart.map(product => {
                return(
                    <div key={product.id} className="contenedor_cart">
                        <img src={product.image} alt={product.title}/>
                        <div className="contenedor_info">
                        <h1>{product.title}</h1>
                        <h2>Precio: {product.price} ETH</h2>
                        <h3>Cantidad: {product.quantity}</h3>
                        <p>Subtotal: {product.quantity * product.price} ETH</p>
                        </div>
                        <button onClick={() => deleteItem(product.id)} className="boton_carrito">Eliminar NFT</button>
                    </div>
                );
            })
            
        }
        <div>
            <Formulario actualizarDatos={actualizarDatos}/>
        </div>
        <p className="total">
            Total: {totalPrice()} ETH
        </p>
        <button onClick={handlerClick} className="boton_carrito">Terminar Compra</button>
        </>
    );
}

export default Cart;