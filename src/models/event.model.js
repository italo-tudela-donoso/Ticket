import { Schema, model } from 'mongoose'

const eventSchema = new Schema({
    name: { type: String},
    date: { type: Date },
    place: { type: String},
    price: { type: Number},
    capacity: { type: Number},
    status: { type: Boolean}
})  

export const Event = model('event', eventSchema)
