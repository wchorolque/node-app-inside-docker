# Crear el directorio base de todo el proyecto
```bash
> mkdir proyecto
> cd proyecto
> mkdir src
```

# Ejecutar en consola de linux

```bash
> docker run -i -t --rm -v $(pwd)/src:/app:rw -p 3000:3000 node:lts-alpine sh
```

# En la consola dentro de docker ejecutar
```bash
> npm init
```

# Instalar las dependencias necesarias
```
> npm install --save express
```

# Agregar a app.js
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

# Probar aplicacion y visitar el pruerto 3000 en el navegador
```bash
> node app.js
```

# Configurar el archivo Dockerfile
```Dockerfile
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./src/package*.json ./

RUN npm install

COPY ./src/ .

EXPOSE 3000

CMD ["node", "app.js"]
```

# Configurar el archivo .dockerignore
```.dockerignore
node_modules
Dockerfile
.dockerignore
```

# Compilar y Ejecutar con Docker
```bash
> docker build -t node-inside-container:1.0 . 
> docker run --rm -p 3000:3000 node-inside-container:1.0
```