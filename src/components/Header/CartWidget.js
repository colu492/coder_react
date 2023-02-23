import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom';

const CartWidget = () =>{

    return (
        <>
        <div>
            <NavLink to='/cart'><ShoppingCartIcon fontSize="large" /> 
            </NavLink>            
            <span style={style.contador}> 1 </span>
        </div>
        </>
    )
}

const style = {
    contador:{
        color:'white',
        padding: '0px 2px 0px 2px',
        backgroundColor: '#ff0000',
        borderRadius: '50%',
    }


}
export default CartWidget