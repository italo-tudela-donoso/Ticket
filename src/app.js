import express from 'express';
import { connectDB } from './config/database.js';
import { env } from './config/env.js';
import userRouter from './routers/user.routers.js';
import eventRouter from './routers/event.routers.js';
import ticketRouter from './routers/ticket.routers.js';
import sessionRouter from './routers/session.routers.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/users', userRouter)
app.use('/api/events', eventRouter)
app.use('/api/tickets', ticketRouter)
app.use('/api/sessions', sessionRouter)

app.listen(env.PORT, () => {
    connectDB().then (
        console.log('Base de datos conectada')
    )
    console.log(`Servidor escuchandoo en el ppuerto ${env.PORT}`)
})