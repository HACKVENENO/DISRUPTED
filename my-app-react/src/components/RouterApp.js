
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Usuario from "./Usuario";
import ProductsTotal from "./ProductsTotal";
import Categorias from './Categorias'
import MainNavigation from "./MainNavigation";
import App from '../App';
import ContentWrapper from './ContentWrapper';

function RouterApp() {

  return (
    <BrowserRouter>
    <div id="wrapper">
      <MainNavigation/>
        <Routes>
                <Route path="/" component={<ContentWrapper/>}/>
                <Route path={"/lastUser"} element={<Usuario/>} />
                <Route path={"/products/total"} element={<ProductsTotal/>} />
                <Route path={"/products/categorias"} element={<Categorias/>} />
                <Route path={"*"} element={<ContentWrapper />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default RouterApp;
