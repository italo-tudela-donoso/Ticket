# Ticket API — Programación Backend II: Diseño y Arquitectura Backend

Su objetivo es administrar una plataforma de venta de entradas, permitiendo gestionar usuarios, eventos y tickets mediante Node.js, Express y MongoDB.

La aplicación expone endpoints HTTP que pueden ser consumidos desde Postman, una aplicación frontend o cualquier cliente compatible con APIs REST.

# Temática del proyecto
El proyecto representa el backend de una plataforma de venta de tickets para eventos.

La API permite centralizar información relacionada con:

usuarios registrados;
eventos disponibles;
tickets emitidos o comprados;
relación entre usuarios, eventos y entradas.

La arquitectura está separada en rutas, controladores, modelos y configuraciones, lo que facilita el mantenimiento y la incorporación de nuevas funcionalidades.

# Tecnologías utilizadas
Node.js
Express.js
MongoDB
Mongoose
JavaScript con ES Modules
dotenv
Postman para pruebas de endpoints
MongoDB Compass para visualizar la base de datos

# Requisitos previos
Antes de ejecutar el proyecto debes tener instalado:

Node.js 18 o superior;
npm;
MongoDB Community Server;
MongoDB Compass, opcional;
Postman, opcional pero recomendado.

# Instalación
Clona o descarga el proyecto y abre una terminal en su carpeta raíz.

npm install
Este comando instalará las dependencias declaradas en package.json.

Variables de entorno
Crea un archivo .env en la raíz del proyecto.

PORT=3000
MONGO_DB=mongodb://127.0.0.1:27017/tickets
Descripción de las variables
Variable	Descripción
PORT	Puerto en el que se ejecutará el servidor Express.
MONGO_DB	URI de conexión a la base de datos MongoDB.


MONGO_DB=mongodb://127.0.0.1:27017/tickets
Ejecución del servidor
Modo desarrollo
npm run dev
El proyecto utiliza el modo watch, por lo que el servidor se reinicia automáticamente al detectar cambios en los archivos.

La URL base de la API será:

http://localhost:3000
Estructura principal del proyecto
src/
├── config/
│   ├── database.js
│   └── env.js
├── controllers/
│   ├── users.controllers.js
│   ├── event.controllers.js
│   └── ticket.controllers.js
├── models/
│   ├── user.model.js
│   ├── event.model.js
│   └── ticket.model.js
├── routers/
│   ├── user.routers.js
│   ├── event.routers.js
│   └── ticket.routers.js
└── app.js

Roles disponibles
La documentación considera los siguientes roles funcionales:

Usuario : Puede consultar eventos disponibles, registrarse y gestionar sus propios tickets.
Administrador : Puede administrar usuarios, eventos y tickets, además de crear, actualizar o eliminar información de la plataforma.


Endpoints principales
En app.js, los routers se encuentran montados de la siguiente manera:

app.use('/users', userRouter)
app.use('/events', eventRouter)
app.use('/tickets', ticketRouter)
Por esta razón, las rutas principales parten desde los siguientes prefijos:

Recurso	URL base
Usuarios	http://localhost:3000/users
Eventos	http://localhost:3000/events
Tickets	http://localhost:3000/tickets


Ejemplos de uso con Postman
Obtener usuarios
Método:

GET 
URL: http://localhost:3000/users

Respuesta esperada:

{
  "status": "success",
  "payload": []
}

Crear un usuario
Método:

POST
URL: http://localhost:3000/users

Body → raw → JSON
Ejemplo de cuerpo:

{
  "first_name": "Italo",
  "last_name": "Tudela",
  "email": "italo@example.com",
  "password": "123456",
  "role": "user"
}

Crear un evento
Método:

POST
URL: http://localhost:3000/events
Ejemplo de cuerpo:

{
  "name": "Concierto Coderhouse",
  "description": "Evento musical de prueba",
  "date": "2026-08-15",
  "location": "Santiago",
  "price": 25000,
  "capacity": 500
}
Crear un ticket
Método:

POST
URL: http://localhost:3000/tickets
Ejemplo de cuerpo:

{
  "event": "ID_DEL_EVENTO",
  "user": "ID_DEL_USUARIO",
  "quantity": 2
}
Los valores ID_DEL_EVENTO e ID_DEL_USUARIO deben reemplazarse por identificadores _id existentes en MongoDB.

# Códigos de respuesta HTTP
Código	Significado
200	    Solicitud procesada correctamente.
201	    Recurso creado correctamente.
400	    Datos inválidos o incompletos.
404	    Recurso o endpoint no encontrado.
409	    Conflicto, por ejemplo un correo ya registrado.
500	    Error interno del servidor.
Pruebas de conexión
Para conectar MongoDB Compass utiliza:

# Autor
Proyecto desarrollado por Italo Tudela  — Programación Backend II: Diseño y Arquitectura Backend
