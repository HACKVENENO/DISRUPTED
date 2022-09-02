const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.routes')
const productosRouter = require('./routes/productos.routes')
const carritoRouter = require('./routes/carrito.routes')
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");
const recuperarContraseniaRouter = require("./routes/recuperar-contrasenia.routes");
//Para que funcionen el put y el delete
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

const app = express();


// Capturar todo lo que venga de un formulario y lo convierta en objeto literal
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Indicamos motor de plantilla a usar.
app.set('view engine', 'ejs');


// Ruta de componentes estaticos
app.use(express.static(path.join(__dirname, '/public')));

// para que capture todo lo que venga de formulario y convierta en objeto literal
app.use(express.urlencoded({extended:false}));
app.use(express.json())



// Rutas Dinamicas MVC
app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/recuperar-contrasenia", recuperarContraseniaRouter);

// Capturar todo lo que venga de un formulario y lo convierta en objeto literal
app.use(express.urlencoded({extended : false}));
app.use(express.json());



// Creamos el servidor
app.listen(3040, () => console.log('Servidor corriendo en el puerto 3040'));