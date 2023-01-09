import { Link } from "react-router-dom"
import React from 'react'
import classes from './MainNavigation.module.css'



function MainNavigation(){
    return (
        <header className= {classes.header} >
            <div className= {classes.logo} > Disrupted Dashboard </div>
            
                <ul>
                    <li>
                        <Link to={'/lastUser'}> <span> Último usuario agregado</span></Link>
                    </li>
                    <li>
                        <Link to={"/products/total"}> <span>Total de productos </span></Link>
                    </li>
                    <li>
                        <Link to={"/products/categorias"}> <span>Categorías de productos</span> </Link>
                    </li>
                </ul>
            


        </header>
    );
} 

export default MainNavigation