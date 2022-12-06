import React, { Component } from "react";

class Usuario extends Component {
    state = {
        usuarios: [],
    }
        componentDidMount() {
            fetch('http://localhost:3040/api/v1/users')
            .then((res) => {
                return res.json();
              })
              .then((usuarios) => {
                this.setState({ usuarios: usuarios.usuarios });
                const usuario = usuarios.usuarios.pop()
                console.log(usuario);
              })
            .catch((error) => console.log(error))
        }
   
    render() {
        return (
                    <div> 
                            {
                                 this.state.usuarios.map((usuario, i) => {
                                    return (
                                        <li key = {i}>
                                            <h3> {usuario.data.nombre} </h3>
                                            <h2> {usuario.data.email} </h2>
                                        </li>
                                    )
                                    })
                                }
                    </div> 
            );
    }
}


export default Usuario