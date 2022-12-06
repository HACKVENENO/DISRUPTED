window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
       

        let errores = [];

        let campoNombre = document.querySelector("#name");
        let campoFotoProducto = document.querySelector("#image");
        let campoDescripcion = document.querySelector("#description");
   

        if (campoNombre.value.trim() == "") {
          errores.push("El nombre del producto tiene que estar completo")
        } else if (campoNombre.value.length > 5) {
            alert("El nombre del producto debe tener mas de 5 caracteres")
        };


        if (campoDescripcion.value.trim() == "") {
            errores.push("La descripción no puede estar vacía")
        } else if (campoCaracteristicas.value.length > 10) {
            errores.push("La descripción debe tener mas de 10 caracteres")
        };

         if(campoFotoProducto.value==""){
            errores.push("Debe colocar una foto de producto")
         }



        let ulerrores = document.querySelector("#errores")
        console.log(errores)
        console.log(ulerrores)

        ulerrores.innerHTML=""

        if (errores.length > 0) {
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                ulerrores.innerHTML += "<li>" + errores[i]  + "</li>"

            }

        }
    })
})
