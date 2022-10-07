let loggedMiddlewares = (req, res, next) => {
    res.locals.logged = false;
    if (req.session && req.session.userLogged){ //variables locales para que puedan ser compartidas entre distintas vistas
        res.locals.logged = true;
        res.locals.userLogged = req.session.userLogged;  
    }
    
    next();
}

module.exports = loggedMiddlewares;

