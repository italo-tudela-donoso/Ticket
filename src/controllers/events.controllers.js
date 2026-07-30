import eventModel from '../models/event.model.js';
import userModel from '../models/user.model.js';

export async function getAll(req, res) {
    try {
        const events = await eventModel.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos' });
    }
}

export async function getEvent(req, res) {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos' })
    }
}

export async function createEvent (req, res) {
    try {
        const { name, date, place, price, capacity, status } = req.body
        const user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const event = await eventModel.create({ 
            name: name, 
            date: date, 
            place: place, 
            price: price, 
            capacity: capacity, 
            status: status, 
            organizer: user._id });

        res.status(201).json({ data: event });
    } catch (error) {
        res.status(500).json({ error:error.toString() });
    }
}

export async function updateEvent(req, res){
    try {
        const event = await eventModel.findById(req.params.eid);
        if (!event) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        res.status(200).json({ data: event });
    } catch (error) {
        res.status(500).json({ error:error.toString() });
    }

}

export async function deleteEvent(req, res){
    try {
        const event = await eventModel.findByIdAndDelete(req.params.id);        
        res.status(200).json({ data: event });
    } catch (error) {
        res.status(500).json({ error:error.toString() });
    }
}

