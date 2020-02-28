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

- Dentro de este archivo se definen y manejan características como:
- Nombre de tu proyecto.
- Versión.
- Dependencias.
- Repositorio.
- Autores.
- Licencia.
- Y más.

- Instalando módulos

## Instalación de proyecto

```
npm install
```



3. MongoDB
3. ExpressJS

