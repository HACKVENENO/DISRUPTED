const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.routes')
const productosRouter = require('./routes/productos.routes')
const carritoRouter = require('./routes/carrito.routes')
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");
const recuperarContraseniaRouter = require("./routes/recuperar-contrasenia.routes");

const app = express();

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


// Creamos el servidor
app.listen(3040, () => console.log('Servidor corriendo en el puerto 3040'));