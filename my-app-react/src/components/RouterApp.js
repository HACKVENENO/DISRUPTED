// import Sidebar from "./SideBar";
// import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route, NavLink, Switch } from "react-router-dom";
import Usuario from "./Usuario";
import Home from "./Home";
import ProductsTotal from "./ProductsTotal";
import Categorias from "./Categorias";
import Generos from "./Generos";
// import Route404 from "./Route404";

function RouterApp() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/home" activeClassName ="activo">
              Home
              </NavLink>
            </li>
          </ul>


        </nav>
   
        <Switch>
          
          <Route path={"/users/:id"} component={Usuario} />
          <Route path={"/products/total"} component={ProductsTotal} />
          <Route path={"/products/categorias"} component={Categorias} />
          <Route path={"/genres"} component={Generos} />
          <Route path={"/"} element={Home} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
