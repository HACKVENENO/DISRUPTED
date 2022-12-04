import { json } from "express"
import React, { useEffect, useState } from "react"

const Categorias = (props) => {
    // const[categorias, setCategorias]= useState({})
    
    useEffect(()=>{
        const contador = async()=> {
            const categorys = await fetch('http://localhost:3040/api/v1/products').then(res=>res.json())
            
            // return categorys
        }
        // const d = contador()
        // setCategorias(d)

    }, []
    )

    return (
            <>
                <div> 
               

                </div>
            </>
        
    )
}



export default Categorias