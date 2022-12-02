const bcrypt = require("bcryptjs");
const db = require("../database/models");

const fs = require ('fs');
const path = require('path');

const registrosFilePath = path.join(__dirname, "../data/users.json");
const registros = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));

const {validationResult}= require ('express-validator');
// const Usuario = require("../database/models/Usuario");
const { CLIENT_RENEG_LIMIT } = require("tls");

const usersController = {
  register: (req, res) => {
      res.render('register')
  },


 create: (req, res) => {

    const resultValidation = validationResult(req);
    console.log(resultValidation);
    // console.log(req);
    // console.log("holis");
    

    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors : resultValidation.mapped()
         });
    } else { 
    let file = req.file;

    let archivo;

    if (file) {
        archivo = req.file.filename
    }   else {
        archivo = "avatar_default.png"
    }
    // console.log(archivo);
        db.Usuario.create({
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        image: archivo,
        email: req.body.email,
        productosComprados: 12,
       // password: bcrypt.hashSync(req.body.password, 10),
       password: req.body.password,
        })
        .then(()=>res.redirect ("login"))
    }
},

 // store: async (req, res) => {

    // let resultValidation = validationResult(req)

    // if (resultValidation.errors.length > 0) {
    //     return res.render('register', {
    //         errors : resultValidation.mapped()
    //     });
    // }

//     let file = req.file;

//     let archivo;

//     if (file) {
//         archivo = req.file.filename
//     }   else {
//         archivo = "avatar_default.png"
//     }


//       try {
//           const user = await 
//           db.Usuario.create({
//             name: 'matias',
//             lastName: req.body.lastName,
//             gender: req.body.gender,
//             imagen: archivo,
//             email: req.body.email,
//             //password: bcrypt.hashSync(req.body.password, 10),
//             password: req.body.password,});
//           console.log(req.body);
//           res.redirect('/login');
//       } catch (error) {
//           console.log(error)
//       }
    
//   },
  
  updateUsuario: async (req, res) => {
      let file = req.file;
  
      let archivo;
  
      if (file) {
          archivo = req.file.filename
      } else {
  
          archivo = "default-image.png"
      }
      try {
          const usuarioEditado = await db.Usuario.update({
                  id: req.params.id,
                 image: "avatar_default.png",
                  name: req.body.name,
                  lastName: req.body.lastName,
                  email: req.body.email, 
                  gender: req.body.gender,
                  password: bcrypt.hashSync(req.body.password, 10),
                  password: req.body.password,
                 imagen: archivo
              },
          {
              where :{
                  id : req.params.id
              }
              
          }
          )
  
           console.log({ usuarioEditado })
           req.session.userLogged = userToLogin;
           res.render("user-edit-form", { usuarioToEdit: usuarioEditado });  
          res.redirect('/')
      } catch (error) {
         res.send({ error })
      }
  
  },
  login: (req,res)=>{
              return res.render("login");
    },

    processLogin: async(req, res) => {
        try{
            let userToLogin = await db.Usuario.findOne({ where: { email: req.body.email } });
            
            if(userToLogin) {

                let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (correctPassword) {
                    delete userToLogin.password; //por seguridad
                    req.session.userLogged = userToLogin;
                    return res.redirect("/");
                }
    //POR QUÈ NO HAY UN ELSE??!!!!
                return res.render("login", {
                    errors: {
                        password: {
                                msg: "Contraseña incorrecta"
                            }
                        }
                });
            }
            
            if(userToLogin){
                return res.send(userToLogin);
            };
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Email inválido"
                        }
                    }
            });
        } catch (error) {
 //           res.send({ error })
            console.log( error );
        }
    },
        logout: (req, res) =>{
        req.session.destroy();
        return res.redirect("/");
    },

    profile: async (req, res) => {
        try {
 
            const user = await db.Usuario.findByPk(req.params.id);
            res.render('user-profile', { user: req.session.userLogged });

        } catch (error) {
            res.send(error)
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
        // return res.render("register")
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