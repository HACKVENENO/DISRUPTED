import "./App.css" ;
import React from 'react'


import { Routes, Route } from "react-router-dom"
import Usuario from "./components/Usuario";
import ProductsTotal from "./components/ProductsTotal";
import Categorias from "./components/Categorias";



//COMPONENTES
// import RouterApp from "./components/RouterApp";
// import { application } from "express";

// app.use(cors())
function App() {

  return (
    <Routes>
            <Route path={"/lastUser"} element={<Usuario/>} />
            <Route path={"/products/total"} element={<ProductsTotal/>} />
            <Route path={"/products/categorias"} element={<Categorias/>} />


    </Routes>
  )
}

export default App;
