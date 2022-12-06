import logo from "./logo.svg";
import "./App.css" ;
import React from 'react'


import { Routes, Route, Link } from "react-router-dom"
import Usuario from "./components/Usuario";
import Home from "./components/Home";
import ProductsTotal from "./components/ProductsTotal";
import Categorias from "./components/Categorias";
import Generos from "./components/Generos";
// import Route404 from ".componentes/Route404";


//COMPONENTES
// import RouterApp from "./components/RouterApp";
// import { application } from "express";

// app.use(cors())
function App() {

  return (
    <Routes>
            <Route path={"/users/:id"} element={<Usuario/>} />
            <Route path={"/products/total"} element={<ProductsTotal/>} />
            <Route path={"/products/total"} element={<ProductsTotal/>} />
            <Route path={"/products/categorias"} element={<Categorias/>} />
            <Route path={"/"} element={<Home/>} />
            {/* <Route path={"*"} element={<Route404/>} /> */}
    </Routes>
  )
}

export default App;
