import logo from "./logo.svg";
import "./App.css" ;
import React from 'react'
import express from "express";


import { Routes, Route, Link } from "react-router-dom"
// import User from ".componentes/Usuario";
// import Home from ".componentes/Home";
// import ProductsTotal from ".componentes/ProductsTotal";
import Categorias from "./components/Categorias";
// import GenresTotal from ".componentes/GenresTotal";
// import Route404 from ".componentes/Route404";

const cors = require('cors')
const app = express();

//COMPONENTES
// import RouterApp from "./components/RouterApp";
// import { application } from "express";

// app.use(cors())
function App() {

  return (
    <Routes>
            {/* <Route path={"/users/total"} element={<UsersTotal/>} />
            <Route path={"/users/:id"} element={<User/>} />
            <Route path={"/products/total"} element={<ProductsTotal/>} /> */}
            <Route path={"/products/categorias"} element={<Categorias/>} />
            {/* <Route path={"/generos/total"} element={<GenresTotal/>} />
            <Route path={"/"} element={<Home/>} />
            <Route path={"*"} element={<Route404/>} /> */}
    </Routes>
  )
}

export default App;
