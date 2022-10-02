//CRUD
//1. Guardar usuario en la BD (el achivo json ahora)
//2. Buscar al usuario que se quiere loguear por su mail //done
//3. Buscar usuario por su ID //done
//4. Editar la información del usuario
//5. Eliminar un usuario de la BD (el achivo json ahora)

//video "proceso de login completo" -->

//se crea objeto literal que va a tener metodos que se van a encargar de las características antes mencionadas

const fs = require("fs");

/////no puedo poner () => me tira error, por qué?
const User = {
    //indicar archivo que hace referencia a nuestra base de datos (JSON ahora)
    fileName : "./data/users.json",
    
    //para obtener los usuarios, leer el archivo JSON (ejemplo para editar o eliminar usuario)
    getUsers : function () {  
      return JSON.parse(fs.readFileSync(this.fileName, "utf-8")); //llamo a fs para que lea el fileName que tiene lod datos de usuario. para que lo pase un array se usa el JSON.parse
    },

    generateId : function (id){

    },

    //obtener todos los usuarios. parece lo mismo que getUsers pero sirve para otras cosas más.
    findAllUsers : function (){
      return this.getUsers();
    },

    //3.Buscar usuario por ID (ponemos findByID pero luego podriamos cambiarlo a findByPk)
    findById : function (id) {
      let allUsers = this.findAllUsers();
      let userFound = allUsers.find(oneUser => oneUser.id === id);
      return userFound;
    },

    //2. Buscar al usuario que se quiere loguear por su mail
    findByEmail : function (email) {
      let allUsers = this.findAllUsers();
      let userFound = allUsers.find(oneUser => oneUser.email === email);
      return userFound;
    },

    //buscar un usuario por diferentes campos (aunque por ejemplo con country va a aparecer el primero en la lista no todos)
    findByField : function (field, text) {
      let allUsers = this.findAllUsers();
      let userFound = allUsers.find(oneUser => oneUser[field] === text);
      return userFound;
    },

     //guardar un usuario // ver!! lo copie para probar no más
    create : function (userData){
      let allUsers = this.findAllUsers();
      allUsers.push(userData); 
      fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " ")); //se hace lo de null y "" para que conserve el formato el archivo JSON
      
    },

    delete : function (){
    },
    
    edit : function (){
    }

}

//console.log(User.create({ name: "Juan", email: "juan@gmail.com"}));

module.exports = User;