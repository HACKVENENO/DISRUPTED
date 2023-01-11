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
            
            <div style={{display: 'block'}}>
            <div className="card-body fondoCaja" style={{display: 'block', boxSizing: 'border-box'}}>
                <div className="text-left">
                            
                                <div className="card-header py-3" style={{backgroundColor:'#772e4a', color:'#fcb8d2', width: '40%', display: 'block', borderRadius: '8px', margin: 'auto'}}> 

                        <ul>
                            {
                                this.state.categorias.map((categoria, i) => {
                                    return (
                                        <li key = {i}>
                                            <h1 style={{backgroundColor:'#77002e', borderRadius: '8px', padding: '12px', textAlign: 'left'}} > Categoría:{categoria.category} </h1>
                                            <h2 style={{backgroundColor:'77002e'}}> Cantidad de productos por categoría: {categoria.productosPorCategoria} </h2>
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


export default Categorias