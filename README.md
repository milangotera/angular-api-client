# Cliente Api Angular

Sencillo cliente angular para consumir el proyecto de api https://github.com/milang90/node-api-mysql 

## Comenzando

Hasta ahora no tenemos ningun tipo de seguridad pues se ha hecho pensando solo en listar informacón del api

### Requisitos Previos

Tener instalado tu ambiente de node así que recuerda consultar que versión tienes instalado en tu equipo.

Este proyecto fué desarrollado bajo la version v12.13.0

```
node --version
```

Tener instaldo Angular en nuestro equipo, sino lo tienes puedes hacerlo con el siguiente comando

```
npm install -g @angular/cli
```

### Instalación

Lo primero que tienes que hacer es navegar hasta la carpeta raiz del proyecto e instalar todas las dependencias

Eso lo hacemos ejecutando el sisguiente comando

```
npm install
```

Luego que termine el proceso de instalación de todos los módulos necesarios ya puedes echar a andar el proyecto.

Esto se hace ejecutando el comando:

```
npm start
```

Ya con esto es todo y tienes ejecuntando el proyecto en tu servidor http://localhost:4200

las Url's disponibles en esta versión son:

GET /api/users/list
Para listar todos los usuarios

GET /api/users/:id
Para mostrar los datos de un usuario

GET /api/users/add
Para listar los usuarios

Las Url's restantes del CRUD para editar y eliminar los datos se ejecuntan de manera transparente para el usuario así que no te preocupes por ello

### Finalmente

Recuerda tener installar primero el proyecto con el pequeño servidor de Node + Express + Mysql