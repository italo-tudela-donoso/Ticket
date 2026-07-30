import {Schema, Types, model } from 'mongoose'

const ticketSchema = new Schema({
    user:  { type: Types.ObjectId, ref: 'user'},
    event: { type: Types.ObjectId, ref: 'event'}
})

const ticketModel = model('ticket', ticketSchema);

export default ticketModel;