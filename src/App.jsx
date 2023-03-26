import React from "react";
import Navbar from "./components/Header/Navbar.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import ItemListContainer from "./containers/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart.js'
import CartProvider from "./context/CartContext.jsx";

const App = () => {

  const greeting = "Bienvenido a Gollo Adventures";

  return (
    <>
    <BrowserRouter>

      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting = {greeting}/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer greeting = {greeting}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
};

export default App;
