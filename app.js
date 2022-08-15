const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/carrito-compras", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/carrito-compras.html"))
});

app.listen(3060, () => console.log("Servidor corriendo en el puerto 3060"));