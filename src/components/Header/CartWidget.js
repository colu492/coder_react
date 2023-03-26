import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () =>{
    const{totalProducts} = useCartContext();


    return (
        <>
        <div>
            <Link to='/cart'><ShoppingCartIcon fontSize="large" /> 
            </Link>            
            <span>{totalProducts() || ''}</span>
        </div>
        </>
    )
}
export default CartWidget