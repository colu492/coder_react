import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{

    return (
        <>
        <div>
            <ShoppingCartIcon fontSize="large" /> 
            <span style={style.contador}> 1 </span>
        </div>
        </>
    )
}

const style = {
    contador:{
        padding: '0px 2px 0px 2px',
        backgroundColor: '#ff0000',
        borderRadius: '50%',
    }


}
export default CartWidget