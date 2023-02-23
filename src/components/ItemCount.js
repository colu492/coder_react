import React, {useState, useEffect} from "react";

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
        <div style={style.carrito}>
        <button disabled={count <= 1} onClick={handlerRestar}>➖</button>
        <h2>{count}</h2>
        <button disabled={count >= stock} onClick={handlerAgregar}>➕</button>
        <button onClick={handlerClick}>Vaciar Carrito</button>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Comprar</button>
        </div>
        </>
    );
    
    
};

const style = {
    carrito:{
        width:'300px',
        backgroundColor:'#00ee14',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }

};
export default AgregarCarrito;