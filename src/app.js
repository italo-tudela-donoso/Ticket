import express from 'express';
import { connectDB } from './config/database.js';
import { env } from './config/env.js';

import userRouter from './routers/user.routers.js';
import eventRouter from './routers/event.routers.js';
import ticketRouter from './routers/ticket.routers.js';
import sessionRouter from './routers/session.routers.js';
import categoryRouter from './routers/category.routers.js';

import { initializePassport } from './config/passport.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';

const app = express()

// Middlwares Generales /////////////////
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(env.COOKIE_SECRET));

// Passport   ///////////////////////////
initializePassport();
app.use(passport.initialize());

/*
 * Ruta para comprobar que Express responde.
 */
app.get("/ping", (req, res) => {
    console.log("Llegó petición a /ping");
    return res.status(200).json({
        status: "success",
        message: "Servidor funcionando"
    });
});



// Rutas
app.use('/api/events', eventRouter);
app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/sessions', sessionRouter);
app.use('/api/categories', categoryRouter)

app.use((req, res) => {
    return res.status(404).json({
        status: "error",
        message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    });
});


// Primero conecta MongoDB - Solo después inicia el servidor.
async function startServer() {
    try {
        await connectDB();
        app.listen(env.PORT, () => {
            console.log( `Servidor escuchando en el puerto ${env.PORT}` );
        });
    } catch (error) {
        console.error(
            "No fue posible iniciar la aplicación:",
            error.message
        );

        process.exit(1);
    }
}

startServer();