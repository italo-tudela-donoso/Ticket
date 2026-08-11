import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
    name:      { type: String, required: true , trim: true},

 })  
const categoryModel = model('category', categorySchema);

export default categoryModel;
