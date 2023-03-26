import React, {useState, useEffect} from "react";
import './ItemCount.css'

const AgregarCarrito = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));


    const handlerClick = () => {
        setCount(initial);
    };
    const handlerAgregar = () => {
        setCount(count + 1);
    };
    const handlerRestar = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])


    return (
        <>
        <div className="contador_container">
        <button className="botones_contador" disabled={count <= 1} onClick={handlerRestar}>➖</button>
        <h2>{count}</h2>
        <button className="botones_contador" disabled={count >= stock} onClick={handlerAgregar}>➕</button>
        <button className="botones_contador" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
        </>
    );
    
    
};


export default AgregarCarrito;