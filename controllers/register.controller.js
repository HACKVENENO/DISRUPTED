const fs = require ('fs');
const path = require('path');

const registrosFilePath = path.join(__dirname, "../data/registros.json");
const registros = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));

const registerController = {    
    register: (req, res) =>  {
        res.render("register");
            },
        
        // Método Registrar

        store: (req, res) => {
            const registro = JSON.parse(fs.readFileSync(registrosFilePath, "utf-8"));

        
            const usuarioNuevo = {
              id: Date.now(),
              image: "avatar_default.png",
              name: req.body.name,
              lastName: req.body.lastName,
              email: req.body.email, 
              password: req.body.password,                       
                };
        
            //si hay foto guarda el nombre de la imagen
             
             if (req.file) {
              usuarioNuevo.image = req.file.filename;
            };
    
            registro.push(usuarioNuevo);
        
            const data = JSON.stringify(registro, null, " ");
            fs.writeFileSync(registrosFilePath, data);
    
            res.redirect("/");
          },

    };

module.exports = registerController;

//debería pasarse todo a users.controller