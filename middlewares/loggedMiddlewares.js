let loggedMiddlewares = (req, res, next) => {
    res.locals.logged = false;
    if (req.session && req.session.userLogged){
        res.locals.logged = true;  
    }
    
    next();
}

module.exports = loggedMiddlewares;

