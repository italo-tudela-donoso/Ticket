import {Schema, Types, model } from 'mongoose'

const ticketSchema = new Schema({
    user: { type: Types.ObjectId, 
            ref: 'user', 
            required: true },
    event: {    type: Types.ObjectId, 
                ref: 'event', 
                required: true },
    purchaseDate: { type: Date, default: Date.now }
})

export const Ticket = mongoose.model('ticket', ticketSchema)


const ticketModel = model('ticket', ticketSchema);

export default ticketModel;