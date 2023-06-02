# COMO CREAR UNA APP EN NODE DENTRO DE DOCKER

## Crear el directorio base de todo el proyecto
```bash
> mkdir proyecto
> cd proyecto
> mkdir src
```

## Ejecutar en consola de linux

```bash
> docker run -i -t --rm -v $(pwd)/src:/app:rw -p 3000:3000 node:lts-alpine sh
```

## En la consola dentro de docker ejecutar
Dentro del directorio /app iniciar el proyecto node
```bash
> npm init
```

## Instalar las dependencias necesarias
```
> npm install --save express
```

## Agregar a app.js
```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from Node, from inside a docker container...</h1>");
});

app.listen(3000, () => {
    console.log("App running on port 3000...");
});
```

## Probar aplicacion y visitar el puerto 3000 en el navegador
```bash
> node app.js
```

## Configurar el archivo Dockerfile
```Dockerfile
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./src/package*.json ./

RUN npm install

COPY ./src/ .

EXPOSE 3000

CMD ["node", "app.js"]
```

## Configurar el archivo .dockerignore
```.dockerignore
node_modules
Dockerfile
.dockerignore
```

## Compilar y Ejecutar con Docker
```bash
> docker build -t node-inside-container:1.0 . 
> docker run --rm -p 3000:3000 node-inside-container:1.0
```
## Agregando librerias a node
Ejecutar los siguiente comandos para iniciar un contenedor 
```bash 
> docker run --rm -i -t -v $(pwd)/src:/usr/src/app:rw node-inside-docker:1.0 sh
```

agregar las librerias mysql2 para conexion a mysql y mongoose para base de datos mongo
```bash
> npm install --save mysql2
> npm install --save mongoose
```