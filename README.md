# Montando una APIRest con Node, Express y MongoDB

Taller sobre Node, APIRest y Mongo impartido en la Jornadas de Informática 2020 del IES Trassierra

**Requisitos**

- [Nodejs](https://nodejs.org/es/)
- [npm]()
- [ExpressJS]()
- [MongoDB]()
- Editor de código. Ej [Visual Studio Code](https://code.visualstudio.com/)

## Instalación

**Windows**

[https://nodejs.org/es/download/](https://nodejs.org/es/download/)

**Linux**
[Cómo instalar Node.js en Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/como-instalar-node-js-en-ubuntu-18-04-es)

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

Actualizar la versión npm

```
npm install npm@latest -g
```

Revisando versiones
```
nodejs -v
npm -v
```

## 01 Hola mundo

2. "Hola Mundo" con node

Creamos un archivo *holamundo.js*

```javascript
console.log("Hola IES Trassierra')
```

Desde terminal ejecutamos el archivo

```
node holamundo.js
```

Podemos abrir node desde consola. Es igual que si abrimos las Herramientas de desarrollador de nuestro navegador.

## 02 Iniciando el proyecto e instalando módulos con NPM

Además de ser el instalador de paquetes de Node, permite lanzar comandos para iniciar un proyecto o instalar dependencias.

### Creamos la carpeta 'demoapi'.

```
mkdir demoapi
cd demoapi
```

### Inicializamos el proyecto creando el archivo *package.json*. Iremos completando la información del asistente. 

```
npm init 
```
![npm_init](/img/01_npm_init.png)

### El archivo *package.json*

Dentro de este archivo se definen y manejan características como:
- Nombre de tu proyecto.
- Versión.
- Dependencias.
- Repositorio.
- Autores.
- Licencia.
- Y más.

### Instalando módulos.

Usamos los comandos [npm](https://www.npmjs.com/) para instalar lo módulos que necesitemos.  Accediendo a la página de npm podremos localizar el módulo que necesitemos con información sobre su uso.

[npm](img/02_pagina_npm.png)

La instalación puede hacerse de forma global o para el proyecto

Instalación global (con permisos root)

```
npm install -g <nombre-paquete>
```

Instalación dentro del proyecto. Se añade en el apartado de dependencias de *package.json*

```
npm install <nombre-paquete> --save
npm -i <nombre-paquete> -S
```

Otros comandos

```
npm uninstall <nombre-paquete> //
npm update <nombre-paquete>
npm install nodemon --save-dev
```

Instalamos el paquete Express
```
npm install express -S
```

Comprobamos que se ha creado la carpeta **/node_modules** y se ha añadido Express como dependencia de nuestro proyecto.

![dependencias](img/03_dependencias.png)

**Si ya tuviéramos el archivo de instalación podríamos instalarlo con npm install**

```
npm install
```

# 03 Servidor con ExpressJS

Creamos el archivo de entrada *server.js* del proyecto, en este caso el que monta un servidor. Añadimos el siguiente código.

```javascript
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hola Trassierra');
});

app.listen(3000, function () {
  console.log('Servidor escuchando en el puerto 3000!');
});
```

Montamos nuestro servidor
```
node server
```

Accedemos a [http://localhost:3000/](http://localhost:3000/)