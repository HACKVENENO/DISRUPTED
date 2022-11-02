const bcrypt = require("bcryptjs");
const User = require("../models/User");

const fs = require ('fs');
const path = require('path');

const registrosFilePath = path.join(__dirname, "../data/users.json");
const registros = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));

const {validationResult}= require ('express-validator')

const usersController = {
    list: (req, res) => {
    try {
      const users = await decodeBase64.users.findAll();
      console.log(users);
      res.render("users", { users : users });
    } catch (error) {
      console.log({ error })
      res.redirect("/users")
    }
  },
  
  crearUsuario: (req, res) => {
      res.render('/create')
  },
  
  modificarUsuario: async (req, res) => {
      try {
          const user = await db.users.findByPk(req.params.id);
          console.log(user);
          res.render('/edit', { user: user });
      } catch (error) {
          console.log(error)
      }
  },
  
  actualizarUsuario: async (req, res) => {
      let file = req.file;
  
      let archivo;
  
      if (file) {
          archivo = req.file.filename
      } else {
  
          archivo = "default-image.png"
      }
      try {
          const usuarioEditado = await db.usuario.update({
                  id: Date.now(),
                  image: "avatar_default.png",
                  name: req.body.name,
                  lastName: req.body.lastName,
                  email: req.body.email, 
                  gender: req.body.gender,
                  password: bcrypt.hashSync(req.body.password, 10),
                  imagen: archivo
              },
          {
              where :{
                  id_user : req.params.id
              }
          }
          )
  
           console.log({ usuarioEditado })
          res.redirect('/')
      } catch (error) {
          res.send({ error })
      }
  
  },
  
  
  borrarUsuario: async(req,res)=>{
      try {
          const usuarioABorrar = await db.users.destroy({
              where:{
                id_user : req.params.id
              }
          });
              res.redirect('/')
  
      } catch (error) {
          
          console.log ({error})
  
      }
  }
  }

module.exports = usersController;





// const usersController = {
//     register: (req, res)=> {
//         return res.render("register")
//     },

//     proccessRegister: (req, res)=> {
//         const resultValidation = validationResult(req);

//         if (resultValidation.errors.length > 0) {
//             return res.render('/register', {
//                 errors : resultValidation.mapped()
//             });
//         }




//     },
    
//             // Método Registrar

//     store: (req, res) => {
//         let registro = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));
    
            
//         let usuarioNuevo = {
//                   id: Date.now(),
//                   image: "avatar_default.png",
//                   name: req.body.name,
//                   lastName: req.body.lastName,
//                   email: req.body.email, 
//                   gender: req.body.gender,
//                   password: bcrypt.hashSync(req.body.password, 10),                       
//                     };
            
//                 //si hay foto guarda el nombre de la imagen
                 
//             if (req.file) {
//                   usuarioNuevo.image = req.file.filename;
//                 };
        
//                 registro.push(usuarioNuevo);
            
//                 let data = JSON.stringify(registro, null, " ");
//                 fs.writeFileSync(registrosFilePath, data);
        
//                 res.redirect("/user/login");
//     },



//     login: (req, res) =>  {

//         return res.render("login");
//     },

//     processLogin: (req, res) => {
//         let userToLogin = User.findByField("email", req.body.email);
        
//         if(userToLogin) {

//             let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
//             if (correctPassword) {
//                 delete userToLogin.password; //por seguridad
//                 req.session.userLogged = userToLogin;
//                 return res.redirect("/user/user-profile");
//             }

//             return res.render("login", {
//                 errors: {
//                     password: {
//                             msg: "Contraseña incorrecta"
//                         }
//                     }
//             });
//         }
        
//         if(userToLogin){
//             return res.send(userToLogin);
//         };
//         return res.render("login", {
//             errors: {
//                 email: {
//                      msg: "No podemos encontrar una cuenta con esta dirección de email"
//                     }
//                 }
//         });
//     },

//     profile: (req,res) =>{
//         return res.render("user-profile", {
//             user : req.session.userLogged,
//         });
//     },

//     logout: (req, res) =>{
//         req.session.destroy();
//         return res.redirect("/");
//     }

// };