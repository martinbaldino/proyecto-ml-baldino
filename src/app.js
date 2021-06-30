const express = require("express");
const path = require("path");
const app = express();
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),()=>console.log("Server Start http://localhost:"+app.get("port")));
//directorio publico
app.use(express.static(path.resolve(__dirname,"../public")));


//routas para acceso web
app.use(require("./routes/web"));

