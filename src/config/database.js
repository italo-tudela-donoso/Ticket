import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectDB() {
    try {
        await mongoose.connect( env.MONGO_URI, )
              console.log('Base de datos conectada')
    } catch (error) {
        console.error('Error al conectar MongoDB', error)
    } finally {
        mongoose.connection.on('error', (err) => {
            console.error('Error en la conexión de MongoDB', err)
        })  
      }
    }
