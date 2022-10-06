const express = require('express');
const session = require("express-session");
const cookies = require("cookie-parser");
const path = require('path');
const app = express();

//middlewares
const loggedMiddlewares = require("./middlewares/loggedMiddlewares");

//Routers
const indexRouter = require('./routes/index.routes')
const productosRouter = require('./routes/productos.routes')
const carritoRouter = require('./routes/carrito.routes')
const usersRouter = require("./routes/users.routes");
const loginRouter = require("./routes/users.routes");
const userProfileRouter = require("./routes/users.routes");
const registerRouter = require("./routes/users.routes");
const recuperarContraseniaRouter = require("./routes/recuperar-contrasenia.routes"); //este también debería ser cambiado a users.routes
const logoutRouter = require("./routes/users.routes");

//session
app.use(session({ secret : "secret", resave : false, saveUninitialized : false }));
app.use(loggedMiddlewares);

//cookies
app.use(cookies());

//Para que funcionen el put y el delete
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// Capturar todo lo que venga de un formulario y lo convierta en objeto literal
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Indicamos motor de plantilla a usar.
app.set('view engine', 'ejs');

// Ruta de componentes estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Rutas Dinamicas MVC
app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/recuperar-contrasenia", recuperarContraseniaRouter);
app.use("/user", usersRouter);
app.use("/user-profile", userProfileRouter);
app.use("/logout", logoutRouter);

// Creamos el servidor
app.listen(3040, () => console.log('Servidor corriendo en el puerto 3040'));