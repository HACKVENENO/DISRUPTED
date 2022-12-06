// import Sidebar from "./SideBar";
// import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route, NavLink, Switch } from "react-router-dom";
import Usuario from "./Usuario";
import ProductsTotal from "./ProductsTotal";
import Categorias from "./Categorias";

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
          
          <Route path={"/lastUser"} component={Usuario} />
          <Route path={"/products/total"} component={ProductsTotal} />
          <Route path={"/products/categorias"} component={Categorias} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
