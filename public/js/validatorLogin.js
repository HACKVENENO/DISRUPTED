window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(e){

        let errores =[];

        let campoEmail = document.querySelector('#email');
        let campoPassword = document.querySelector('#password');

      
        if (campoEmail.value== ''){
            errores.push ("El ingreso del EMAIL es obligatorio")
        } else if (!expresionregular.test(campoEmail.value)){
            errores.push ("Debes ingresar un EMAIL válido")
        };


        if (campoPassword.value.trim()== ''){
            errores.push ("Debes ingresar un PASSWORD")
        } else if (campoNombre.value.length > 8){
            errores.push ("El PASSWORD debe tener al menos 8 caracteres")
        };

        let ulerrores =document.querySelector('#errores')
        console.log(errores)
        console.log(ulerrores)

        ulerrores.innerHTML=""
        
        if(errores.length>0){
            e.preventDefault();
            for (let i=0; i<errores.length; i++){
            ulerrores.innerHTML+="<li>"+errores[i] + "</li>"

                    }
        }

    })
});
