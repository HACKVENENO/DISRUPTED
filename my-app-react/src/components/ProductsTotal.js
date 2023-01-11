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
            <div style={{display: 'block'}}>
            <div className="card-body fondoCaja" style={{display: 'block', boxSizing: 'border-box'}}>
                <div className="text-left">
                            
                                <div className="card-header py-3" style={{backgroundColor:'#772e4a', color:'#fcb8d2', width: '40%', display: 'block', borderRadius: '8px', margin: 'auto'}}>

                        <ul>
                            {
                                this.state.productos.map((producto, i) => {
                                    return (
                                        <li key = {i}>
                                    
                                            <h2 style={{backgroundColor:'#77002e',  borderRadius: '8px', padding: '12px', textAlign: 'center'}}> Nombre: {producto.data.nombre} </h2>
                                            <h3 style={{backgroundColor:'77002e'}}> Producto número: {i+=1} </h3>
                                            <h3 style={{backgroundColor:'77002e'}}> Descripción: {producto.data.description} </h3>
                                            <h3 style={{backgroundColor:'77002e'}}> Categoría: {producto.data.category} </h3>
                                        </li>
                                    )
                                    })
                                }
                            
                        </ul>
                

                          
                            </div>                        
                    </div>
                </div>
                </div>
            
            );
    }
}


export default ProductsTotal