// import { useParams } from "react-router-dom";
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
                console.log(usuarios);
              })
            .catch((error) => console.log(error))

        }
   
   
    render() {
        return (
            
                    <div> 

                            {
                                 this.state.usuarios[usuarios.length-1]
                                    

                                }

                            
                       
                

                    </div>
            
            
            );

    }
}


export default Usuario