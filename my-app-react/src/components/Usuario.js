import React, { Component } from "react";

class Usuario extends Component {
    state = {
        usuario: {},
    }
        componentDidMount() {
            fetch('http://localhost:3040/api/v1/users')
            .then((res) => {
                return res.json();
              })
              .then((usuarios) => {
                const usuario = usuarios.usuarios.pop()
                this.setState({ usuario: usuario.data });
                console.log(usuario);
              })
            .catch((error) => console.log(error))
        }
   
    render() {
        return (
                    <div> 
                        <h3> ÚLTIMO USUARIO AGREGADO: </h3>
                        <h3> Nombre: {this.state.usuario.nombre} </h3>
                        <h2> Email: {this.state.usuario.email} </h2>

                              
                    </div> 
            );
    }
}


export default Usuario