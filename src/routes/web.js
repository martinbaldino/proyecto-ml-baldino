const express=require("express");
const app = express();
const path=require("path");

//rutas del sitio
app.get ("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views","home.html")));
app.get ("/login",(req,res)=>res.sendFile(path.resolve(__dirname,"../views","login.html")));
app.get ("/register", (req,res) => res.sendFile(path.resolve(__dirname,"../views","register.html")));


module.exports = app;