let usersMiddlewares = (req, res, next) => {
    if (req.session.userLogged){ //está en userController
        return res.redirect("/user/user-profile");
    }
    next();
}

module.exports = usersMiddlewares;

//con esto ya no puedo entrar a login ni register si ya inicié sesión

