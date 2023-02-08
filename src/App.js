import React from "react";
import Navbar from "./components/Header/Navbar.js";
import { ItemListContainer } from "./ItemListContainer";

const App = () => {
  return (
    <Navbar >
      <ItemListContainer/>
    </Navbar>
  );
};

export default App;
