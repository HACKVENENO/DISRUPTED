// import React, { useEffect, useState } from "react"
import React, { Component } from "react";
//import classes from './Categorias.module.css'


class Categorias extends Component {
    state = {
        categorias: [],
    }
    
        componentDidMount() {
            fetch('http://localhost:3040/api/v1/products/categorias')
            .then((res) => {
                return res.json();
              })
              .then((categorias) => {
                this.setState({ categorias: categorias.countByCategory.categorias });
             
              })
            .catch((error) => console.log(error))

        }
   
   
    render() {
        return (
            
                    <div> 

                        <ul>
                            {
                                this.state.categorias.map((categoria, i) => {
                                    return (
                                        <li key = {i}>
                                            <h1> Categoría:{categoria.category} </h1>
                                            <h2> Cantidad de productos por categoría: {categoria.productosPorCategoria} </h2>
                                        </li>
                                    )
                                    })
                                }
                            
                        </ul>
                

                    </div>
            
            
            );

    }
}


export default Categorias