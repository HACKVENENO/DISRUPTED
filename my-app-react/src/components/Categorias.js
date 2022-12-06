// import React, { useEffect, useState } from "react"
import React, { Component } from "react";


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
                                            <h3> {categoria.category} </h3>
                                            <h2> {categoria.productosPorCategoria} </h2>
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