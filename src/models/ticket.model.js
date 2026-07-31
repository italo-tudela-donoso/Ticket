import {Schema, Types, model } from 'mongoose'

const ticketSchema = new Schema({
    user:     {type: Types.ObjectId, ref: 'user'},
    event:    {type: Types.ObjectId, ref: 'event'},
    status:   {type: String, enum: ['active', 'cancelled'], default:'active'},
    quantity: {type: Number, required: true, min: 1},
    code:     {type: String, require: true, unique: true}
})

const ticketModel = model('ticket', ticketSchema);

export default ticketModel;