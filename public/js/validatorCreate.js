window.addEventListener("load", function () {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
       

        let errores3 = [];

        let campoNombre = document.querySelector(".name3");
        let campoFotoProducto = document.querySelector("#image");
        let campoDescripcion = document.querySelector("#description");
   

        if (campoNombre.value.trim() == "") {
          errores3.push("El nombre del producto tiene que estar completo")
        } else if (campoNombre.value.length < 5) {
            errores3.push("El nombre del producto debe tener mas de 5 caracteres")
        };


        if (campoDescripcion.value.trim() == "") {
            errores3.push("La descripción no puede estar vacía")
        } else if (campoCaracteristicas.value.length < 10) {
            errores3.push("La descripción debe tener mas de 10 caracteres")
        };

         if(campoFotoProducto.value==""){
            errores3.push("Debe colocar una foto de producto")
         }



        let ulerrores3 = document.querySelector("#errores")
        console.log(errores3)
        console.log(ulerrores3)

        ulerrores3.innerHTML=""

        if (errores3.length > 0) {
            e.preventDefault();
            for (let i = 0; i < errores3.length; i++) {
                ulerrores3.innerHTML += "<li>" + errores3[i]  + "</li>"

            }

        }
    })
})
