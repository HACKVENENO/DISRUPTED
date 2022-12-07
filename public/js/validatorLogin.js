window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(e){

        let errores2 =[];

        let campoEmail = document.querySelector('#email');
        let campoPassword = document.querySelector('#password');

      
        if (campoEmail.value== ''){
            errores2.push ("El ingreso del EMAIL es obligatorio")
        } else if (!expresionregular.test(campoEmail.value)){
            errores2.push ("Debes ingresar un EMAIL válido")
        };


        if (campoPassword.value.trim()== ''){
            errores2.push ("Debes ingresar un PASSWORD")
        } else if (campoNombre.value.length < 8){
            errores2.push ("El PASSWORD debe tener al menos 8 caracteres")
        };

        let ulerrores2 =document.querySelector('#errores')
        console.log(errores2)
        console.log(ulerrores2)

        ulerrores2.innerHTML=""
        
        if(errores2.length>0){
            e.preventDefault();
            for (let i=0; i<errores2.length; i++){
            ulerrores2.innerHTML+="<li>"+errores2[i] + "</li>"

                    }
        }

    })
});
