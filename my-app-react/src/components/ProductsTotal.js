// import React, { useEffect, useState } from "react"
import React, { Component } from "react";

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
                                            <h3> Producto número: {i} </h3>
                                            <h3> Nombre: {producto.data.nombre} </h3>
                                            <h2> Descripción: {producto.data.description} </h2>
                                            <h2> Categoría: {producto.data.category} </h2>
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