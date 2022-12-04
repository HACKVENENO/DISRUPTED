import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Usuario";
import Home from "./Home";
import ProductsTotal from "./ProductsTotal";
import ProductsGenero from "./ProductsGenero";
import Generos from "./Generos";
import Route404 from "./Route404";

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
          <Route path={"/users/total"} component={UsersTotal} />
          <Route path={"/users/:id"} component={User} />
          <Route path={"/products/total"} component={ProductsTotal} />
          <Route path={"/products/genero"} component={ProductsGenero} />
          <Route path={"/generos/total"} component={GenresTotal} />

          <Route path={"/"} element={Home} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
