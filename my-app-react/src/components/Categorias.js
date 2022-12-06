import React, { useEffect, useState } from "react"

const Categorias = (props) => {
    // const[categorias, setCategorias]= useState({})
    
    useEffect(()=>{
        const contador = ()=> {
            fetch('http://localhost:3040/api/v1/products').then(res=>res.json())
        }
        console.log({contador});

        // const d = contador()
        // setCategorias(d)

    }, []
    )

    return (
            <>
                <div> 

                    <h1>Categorias</h1>
               

                </div>
            </>
        
    )
}



export default Categorias