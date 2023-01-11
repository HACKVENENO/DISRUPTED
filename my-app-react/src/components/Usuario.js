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
                // console.log(usuario);
              })
            .catch((error) => console.log(error))
        }
   
    render() {
        return (
            <div style={{display: 'block'}}>
            <div  style={{display: 'block', boxSizing: 'border-box'}}>
                <div className="text-left">
                            
                                <div className="card-header py-3" style={{backgroundColor:'#772e4a', color:'#fcb8d2', width: '400px', display: 'block', borderRadius: '8px', margin: 'auto'}}>
                        <h2 style={{backgroundColor:'#77002e',borderRadius: '8px', padding: '12px', textAlign: 'center'}}> Último Usuario Agregado </h2>
                        <h3 style={{backgroundColor:'77002e'}}> Nombre: {this.state.usuario.nombre} </h3>
                        <h3 style={{backgroundColor:'77002e'}}> Email: {this.state.usuario.email} </h3>
                                  
                            </div>                        
                    </div>
                </div>
                </div>
            );

            
    }
}


export default Usuario