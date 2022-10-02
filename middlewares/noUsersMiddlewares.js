let noUsersMiddlewares = (req, res, next) => {
    if (!req.session.userLogged){
        return res.redirect("/user/login");
    }
    next();
}


module.exports = noUsersMiddlewares;

//con esto no puedo entrar al perfil del usuario si no inicié sesión