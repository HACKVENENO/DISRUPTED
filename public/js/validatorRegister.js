window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(e){

        let errores =[];

        let campoNombre = document.querySelector('#nombre');

        if (campoNombre.value.trim()== ''){
            errores.push ("El espacio del NOMBRE debe estar completo")
        } else if (campoNombre.value.length < 2){
            errores.push ("El NOMBRE debe tener al menos 2 letras")
        };

        let campoApellido = document.querySelector('.datosPersonales lastName');

        if (campoApellido.value.trim()== ''){
            errores.push ("El espacio del APELLIDO debe estar completo")
        } else if (campoNombre.value.length < 2){
            errores.push ("El APELLIDO debe tener al menos 2 letras")
        };

        let campoEmail = document.querySelector('.datosPersonales email');

        if (campoEmail.value== ''){
            errores.push ("El ingreso del EMAIL es obligatorio")
        } else if (!expresionregular.test(campoEmail.value)){
            errores.push ("Debes ingresar un EMAIL válido")
        };

        let campoPassword = document.querySelector('.datosPersonales password');

        if (campoPassword.value.trim()== ''){
            errores.push ("Debes ingresar un PASSWORD")
        } else if (campoNombre.value.length < 8){
            errores.push ("El PASSWORD debe tener al menos 8 caracteres")
        };

        let ulerrores =document.querySelector('#errores')
        console.log(errores)
        console.log(ulerrores)

        ulerrores.innerHTML=""
        
        if(errores.length>0){
            e.preventDefault();
            for (let i=0; i<errores.length; i++){
                ulerrores.innerHTML+="<li>"+errores[i]
            }
        }



    })
})