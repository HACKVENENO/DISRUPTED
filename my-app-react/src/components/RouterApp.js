
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Usuario from "./Usuario";
import ProductsTotal from "./ProductsTotal";
import Categorias from './Categorias'
import MainNavigation from "./MainNavigation";


function RouterApp() {

  return (
    <BrowserRouter>
      <MainNavigation>
        <Routes>
                <Route path={"/lastUser"} element={<Usuario/>} />
                <Route path={"/products/total"} element={<ProductsTotal/>} />
                <Route path={"/products/categorias"} element={<Categorias/>} />
        </Routes>
      </MainNavigation>
    </BrowserRouter>
  )
}

export default RouterApp;
