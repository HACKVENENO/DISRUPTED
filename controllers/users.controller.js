//const path = require('path');
const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const fs = require ('fs');
const path = require('path');

const registrosFilePath = path.join(__dirname, "../data/registros.json");
const registros = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));

const {validationResult}= require ('express-validator')

const usersController = {
    register: (req, res)=> {
        return res.render("register")
    },

    proccessRegister: (req, res)=> {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('/register', {
                errors : resultValidation.mapped()
            });
        }

        password : bcryptjs.hashSync(req.body.password, 10),
        res.send("ok");


    },
    
            // Método Registrar

    store: (req, res) => {
        let registro = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));
    
            
        let usuarioNuevo = {
                  id: Date.now(),
                  image: "avatar_default.png",
                  name: req.body.name,
                  lastName: req.body.lastName,
                  email: req.body.email, 
                  gender: req.body.gender,
                  password: req.body.password,                       
                    };
            
                //si hay foto guarda el nombre de la imagen
                 
            if (req.file) {
                  usuarioNuevo.image = req.file.filename;
                };
        
                registro.push(usuarioNuevo);
            
                let data = JSON.stringify(registro, null, " ");
                fs.writeFileSync(registrosFilePath, data);
        
                res.redirect("../register");
    },



    login: (req, res) =>  {

        return res.render("login");
    },

    processLogin: (req, res) => {
        let userToLogin = User.findByField("email", req.body.email);
        
        if(userToLogin) {
            //let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password); //cuando este hecho el bcryptjs se habilita esto y se saca el que está abajo    
            let correctPassword = User.findByField("password", req.body.password);
            if (correctPassword) {
                delete userToLogin.password; //por seguridad
                req.session.userLogged = userToLogin;
                return res.redirect("/user/user-profile");
            }

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
                     msg: "No podemos encontrar una cuenta con esta dirección de email"
                    }
                }
        });
    },

    profile: (req,res) =>{
        return res.render("user-profile", {
            user : req.session.userLogged,
        });
    },

    logout: (req, res) =>{
        req.session.destroy();
        return res.redirect("/");
    }

};

module.exports = usersController;