const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hola desde Node, estoy en un contenedor Docker...</h1>");
});


app.listen(3000, () => {
    console.log("App running on port 3000...");
});