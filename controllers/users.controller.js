//const path = require('path');
const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const usersController = {
    register: (req, res)=> {

        res.render("register")
    },

    proccessRegister: (req, res)=> {
        password : bcryptjs.hashSync(req.body.password, 10), //si te sirve joya
        res.send("ok");
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