import React from "react";
import { useParams } from "react-router-dom";

const Usuario = (props) => {
    const parametros = useParams();

    return (
            <>
                <div> Último usuario creado: {parametros.id}</div><p></p>
            </>
        
    )
}

export default Usuario