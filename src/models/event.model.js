import { Schema, Types, model } from 'mongoose'

const eventSchema = new Schema({
    name:      { type: String, required: true , trim: true},
    date:      { type: Date, required: true},
    place:     { type: String, required: true, trim: true},
    price:     { type: Number, required: true, min: 0 },
    capacity:  { type: Number, required: true, min: 0 },
    status:    { type: Boolean, default: true },
    organizer: { type: Types.ObjectId, ref: 'user'},
    category:  { type: Types.ObjectId, ref: 'category'}

 })  
const eventModel = model('event', eventSchema);
export default eventModel;
