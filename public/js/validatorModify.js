window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
       

        let errores4 = [];

        let campoNombre = document.querySelector(".name4");
        let campoFotoProducto = document.querySelector("#foto");
        let campoDescripcion = document.querySelector(".description4");
   

        if (campoNombre.value.trim() == "") {
          errores4.push("El campo nombre tiene que estar completo")
        } else if (campoNombre.value.length < 5) {
            errores4.push("El nombre debe tener mas de 5 caracteres")
        };


        if (campoDescripcion.value.trim() == "") {
            errores4.push("La descripción tiene que estar completa")
        } else if (campoCaracteristicas.value.length < 10) {
            errores4.push("La descripción debe tener mas de 10 caracteres")
        };

         if(campoFotoProducto.value==""){
            errores4.push("Debe colocar una foto de producto")
         }



        let ulerrores4 = document.querySelector("#errores4")
        console.log(errores4)
        console.log(ulerrores4)

        ulerrores4.innerHTML=""

        if (errores4.length > 0) {
            e.preventDefault();
            for (let i = 0; i < errores4.length; i++) {
                ulerrores4.innerHTML += "<li>" + errores4[i]  + "</li>"

            }

        }
    })
})
