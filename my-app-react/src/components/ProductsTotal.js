// import React, { useEffect, useState } from "react"
import React, { Component } from "react";
//import classes from './ProductsTotal.module.css'

class ProductsTotal extends Component {
    state = {
        productos: [],
    }  
        componentDidMount() {
            fetch('http://localhost:3040/api/v1/products')
            .then((res) => {
                return res.json();
              })
              .then((productos) => {
                this.setState({ productos: productos.productos });
                console.log(productos);
              })
            .catch((error) => console.log(error))

        }  
    render() {
        return (
                    <div> 

                        <ul>
                            {
                                this.state.productos.map((producto, i) => {
                                    return (
                                        <li key = {i}>
                                    
                                            <h2> Nombre: {producto.data.nombre} </h2>
                                            <h3> Producto número: {i+=1} </h3>
                                            <h3> Descripción: {producto.data.description} </h3>
                                            <h3> Categoría: {producto.data.category} </h3>
                                        </li>
                                    )
                                    })
                                }
                            
                        </ul>
                

                    </div>
            
            );
    }
}


export default ProductsTotal